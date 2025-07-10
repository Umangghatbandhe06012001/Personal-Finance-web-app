"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import ExpensesBarChart from "@/components/ExpensesBarChart";
import RopeHeading from "@/components/RopeHeading";
import { Loader2Icon } from "lucide-react";

export default function Home() {
  const [transactions, setTransactions] = useState<{ date: string; amount: number }[]>([]);
  const [chartData, setChartData] = useState<{ month: string; amount: number }[]>([]);
  const [load, setLoad] = useState(false);

  function getChartData(transactions: { date: string; amount: number }[]) {
    const grouped: Record<string, number> = transactions.reduce((acc, txn) => {
      const month = new Date(txn.date).toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });
      acc[month] = (acc[month] || 0) + txn.amount;
      return acc;
    }, {});
  
    return Object.entries(grouped).map(([k, v]) => ({
      month: k,
      amount: v,
    }));
  }

  function gettingTransactions() {
    axios.get("/api/transactions").then((res) => {
      setTimeout(()=>{
        setLoad(false);
        setTransactions(res.data);
      setChartData(getChartData(res.data));
      },1000)
      
    });
  }

  useEffect(() => {
    setLoad(true);
    gettingTransactions();
  }, []);

  return (
    <div className="p-8 space-y-8 gap-5">
      <RopeHeading />
      <div className="h-[300px] w-[100%] pl-[10px] mb-[15px] text-center">
        {load && <Loader2Icon className="w-4 h-4 animate-spin content-center text-center" />}
        {!load && <ExpensesBarChart data={chartData} />}
      </div>
      <TransactionList
        data={transactions}
        settingData={(val) => {
          setTransactions(val);
          setChartData(getChartData(val));
        }}
      />
    </div>
  );
}
