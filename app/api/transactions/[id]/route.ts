import Transaction from '@/models/Transaction';
import { connectToDB } from '@/lib/db';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function DELETE(_: Request, { params }: Params) {
  await connectToDB();
  await Transaction.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request, { params }: Params) {
  await connectToDB();
  const data = await req.json();
  const updated = await Transaction.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(updated);
}
