import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import Transaction from '@/models/Transaction';

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectToDB();
    await Transaction.findByIdAndDelete(context.params.id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete transaction' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();
    const updated = await Transaction.findByIdAndUpdate(context.params.id, data, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: 'Failed to update transaction' },
      { status: 500 }
    );
  }
}
