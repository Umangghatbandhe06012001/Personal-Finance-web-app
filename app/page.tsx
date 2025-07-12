// "use client";

// import { useEffect, useState, useCallback } from "react";
// import axios from "axios";

// import TransactionList from "@/components/TransactionList";
// import ExpensesBarChart from "@/components/ExpensesBarChart";
// import RopeHeading from "@/components/RopeHeading";
// import { Loader2Icon } from "lucide-react";

// export default function Home() {
//   const [transactions, setTransactions] = useState<{ date: string; amount: number }[]>([]);
//   const [chartData, setChartData] = useState<{ month: string; amount: number }[]>([]);
//   const [load, setLoad] = useState(false);

//   function getChartData(transactions: { date: string; amount: number }[]) {
//     const grouped: Record<string, number> = transactions.reduce((acc, txn) => {
//       const month = new Date(txn.date).toLocaleString("en-US", {
//         month: "short",
//         year: "numeric",
//       });
//       acc[month] = (acc[month] || 0) + txn.amount;
//       return acc;
//     }, {});

//     return Object.entries(grouped).map(([k, v]) => ({
//       month: k,
//       amount: v,
//     }));
//   }

//   const gettingTransactions = useCallback(() => {
//     axios.get("/api/transactions").then((res) => {
//       setTimeout(() => {
//         setLoad(false);
//         setTransactions(res.data);
//         setChartData(getChartData(res.data));
//       }, 1000);
//     });
//   }, []);

//   useEffect(() => {
//     setLoad(true);
//     gettingTransactions();
//   }, [gettingTransactions]);

//   return (
//     <div className="p-8 space-y-8 gap-5">
//       <RopeHeading />
//       <div className="h-[300px] w-full pl-2 mb-4 text-center">
//         {load ? (
//           <div className="flex justify-center items-center h-full">
//             <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
//           </div>
//         ) : (
//           <ExpensesBarChart data={chartData} />
//         )}
//       </div>
//       <TransactionList
//         data={transactions}
//         settingData={(val) => {
//           setTransactions(val);
//           setChartData(getChartData(val));
//         }}
//       />
//     </div>
//   );
// }



"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import TransactionList from "@/components/TransactionList";
import ExpensesBarChart from "@/components/ExpensesBarChart";
import RopeHeading from "@/components/RopeHeading";
import { Loader2Icon } from "lucide-react";

export default function Home() {
  const [transactions, setTransactions] = useState<{ date: string; amount: number }[]>([]);
  const [chartData, setChartData] = useState<{ month: string; amount: number }[]>([]);
  const [load, setLoad] = useState(false);

  const getChartData = useCallback((transactions: { date: string; amount: number }[]) => {
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
  }, []);

  const gettingTransactions = useCallback(() => {
    axios
      .get("/api/transactions")
      .then((res) => {
        setTimeout(() => {
          setLoad(false);
          setTransactions(res.data);
          setChartData(getChartData(res.data));
        }, 1000);
      })
      .catch(() => {
        setLoad(false);
        // Optional: toast.error("Failed to load transactions");
      });
  }, [getChartData]);

  useEffect(() => {
    setLoad(true);
    gettingTransactions();
  }, [gettingTransactions]);

  return (
    <div className="p-8 space-y-8 gap-5">
      <RopeHeading />
      <div className="h-[300px] w-full pl-2 mb-4 text-center">
        {load ? (
          <div className="flex justify-center items-center h-full">
            <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <ExpensesBarChart data={chartData} />
        )}
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
