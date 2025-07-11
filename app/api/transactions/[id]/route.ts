import Transaction from '@/models/Transaction';
import { connectToDB } from '@/lib/db';
import { NextResponse } from 'next/server';

type Context = {
  params: {
    id: string;
  };
};

export async function DELETE(req: Request, context: Context) {
  const { id } = context.params;
  await connectToDB();
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request, context: Context) {
  const { id } = context.params;
  const data = await req.json();
  await connectToDB();
  const updated = await Transaction.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}
