// import { connectToDB } from '@/lib/db';
// import Transaction from '@/models/Transaction';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   await connectToDB();
//   const transactions = await Transaction.find().sort({ date: -1 });
//   return NextResponse.json(transactions);
// }

// export async function POST(req: Request) {
//   await connectToDB();
//   const data = await req.json();
//   const newTxn = await Transaction.create(data);
//   return NextResponse.json(newTxn);
// }


import { connectToDB } from '@/lib/db';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  await connectToDB();
  const data = await req.json();
  const newTxn = await Transaction.create(data);
  return NextResponse.json(newTxn);
}
