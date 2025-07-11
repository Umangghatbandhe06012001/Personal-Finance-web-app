import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import Transaction from '@/models/Transaction';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    await Transaction.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete transaction' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await request.json();
    const updated = await Transaction.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update transaction' },
      { status: 500 }
    );
  }
}
