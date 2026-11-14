import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    message: 'Payment verification is not enabled in this demo mode. Admin confirmation is required before any order is marked paid.',
    status: 'Awaiting Verification',
  }, { status: 202 });
}
