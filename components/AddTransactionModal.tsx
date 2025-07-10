"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TransactionForm from "./TransactionForm";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
export default function AddTransactionModal() {
  const [open, setOpen] = useState(false); // ⬅️ Manage dialog state here
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-[5px] mr-[10px] mb-[10px] h-[100%] w-[100%] border-none cursor-pointer addTxnMbWr" >
          <PlusCircle className="w-[1rem] h-[1rem] mr-[5px]" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#4F46E5]  text-[#fff] z-10 rounded-[15px] w-[60%] h-[10rem] transactUpperWrappr">
        <DialogHeader>
          <DialogTitle>Add a new transaction</DialogTitle>
        </DialogHeader>
        <TransactionForm setOpen={(value: boolean) => setOpen(value)} />
      </DialogContent>
    </Dialog>
  );
}
