import Transaction from '@/models/Transaction';
import { connectToDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectToDB();
  await Transaction.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await connectToDB();
  const data = await req.json();
  const updated = await Transaction.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(updated);
}
