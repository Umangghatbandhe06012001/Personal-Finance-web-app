// components/forms/TransactionForm.tsx
"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // NEW
// import { FloatingInput } from "@/components/ui/floating-input";
import { Loader2Icon } from "lucide-react";


interface TransactionFormProps {
  setOpen: (value: boolean) => void;
}

export default function TransactionForm({ setOpen }: TransactionFormProps) {
  const [form, setForm] = useState({ amount: "", description: "", date: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!form.amount || !form.date) {
      toast.error("Amount and date are required.");
      return;
    }

    try {
      await axios.post("/api/transactions", {
        ...form,
        amount: parseFloat(form.amount),
      });

      

      setTimeout(()=>{
        setLoading(false);
        setForm({ amount: "", description: "", date: "" });
        toast.success("Transaction added!");
        setOpen(false); // Close modal on success
      },1000);
      window.location.reload();
    } catch {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-[100%] h-[100%]">
    <form onSubmit={handleSubmit} className="space-y-4 mt-[15px] ml-[30px] mb-[15px] transacFormWrapper">
      <Input
        type="number"
        placeholder="Amount"
        style={{padding:'0px 15px'}}

        className="w-[25%] mr-[15px] h-[3rem] rounded-[10px] cursor-pointer FormInp"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <Input
        type="date"
        value={form.date}
        style={{padding:'0px 15px'}}
        className="w-[25%] mr-[15px] h-[3rem] rounded-[10px] cursor-pointer FormInp"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Description"
        style={{padding:'0px 15px'}}

        value={form.description}
        className="w-[25%] mr-[15px] h-[3rem] rounded-[10px] cursor-pointer FormInp"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {/* <Button type="submit" className="rounded-[25px] text-[black] text-[.8rem] bg-[#fff] font-bold w-[7.1rem] cursor-pointer border-none">{loading ? <Loader2Icon className="w-4 h-4 animate-spin" />:"Add Transaction"}</Button> */}
      <Button
        type="submit"
        disabled={loading}
        className="rounded-[25px] text-black text-sm bg-white font-bold w-[7.1rem] cursor-pointer border-none flex items-center justify-center gap-2 FormInp formBtn"
      >
        {loading ? (
          <>
            <Loader2Icon className="w-4 h-4 animate-spin" />
          </>
        ) : (
          "Add Transaction"
        )}
      </Button>

    </form>
    </div>
  );
}
