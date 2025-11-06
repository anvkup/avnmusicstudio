// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // 1. Connect to MongoDB Atlas
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME || 'avn_studio_db');
    
    // 2. Insert the form data into the 'leads' collection
    const result = await db.collection('leads').insertOne({
      ...data,
      submittedAt: new Date(),
      status: 'New Lead', // Default status for CRM tracking
    });

    // Optional: Add logic here to also send an email notification

    return NextResponse.json({ 
        message: 'Lead saved successfully', 
        id: result.insertedId 
    }, { status: 201 });

  } catch (error) {
    console.error('MongoDB Contact Form Submission Error:', error);
    return NextResponse.json(
      { error: 'Failed to save lead. Please try again.' },
      { status: 500 }
    );
  }
}