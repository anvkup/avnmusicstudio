import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const beat = body.beat || 'demo-beat';
    const license = body.license || 'WAV Lease';
    const customer = body.customer || 'Guest';
    const email = body.email || '';

    if (!email && !body.customer) {
      return NextResponse.json(
        { message: 'Customer name or email is required to submit a beat request.' },
        { status: 400 }
      );
    }

    const orderId = `AVN-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json(
      {
        message: 'Beat request received. The preview order is awaiting payment confirmation and internal approval.',
        status: 'Awaiting Payment',
        orderId,
        beat,
        license,
        customer,
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid order payload.' },
      { status: 400 }
    );
  }
}
