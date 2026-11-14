// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data?.name || !data?.email || !data?.phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const rateLimitResult = checkRateLimit(data.email || data.phone, 'contact');
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter,
        },
        { status: 429 }
      );
    }

    if (!clientPromise) {
      throw new Error('MONGODB_URI is not defined. Add it to your environment variables before using the contact form API.');
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME || 'avn_studio_db');

    const result = await db.collection('leads').insertOne({
      ...data,
      submittedAt: new Date(),
      status: 'New Lead',
    });

    return NextResponse.json(
      {
        message: 'Lead saved successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('MongoDB Contact Form Submission Error:', error);

    if (error instanceof Error && error.message.includes('MONGODB_URI')) {
      return NextResponse.json(
        { error: 'Database is not configured yet. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to save lead. Please try again.' },
      { status: 500 }
    );
  }
}