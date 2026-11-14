import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Private downloaded files are intentionally unavailable in preview mode. Secure authorization and storage must be configured before live release delivery.',
  }, { status: 403 });
}
