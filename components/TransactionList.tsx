// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";
// import ServerErrorModal from "@/components/ServerErrorModal";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import TransactionForm from "./TransactionForm";

// export default function TransactionList({
//   data,
//   settingData,
// }: {
//   data: any;
//   settingData: any;
// }) {
//   const [open, setOpen] = useState(false);
//   const [Tnsloading, setTnsLoading] = useState(false);
//   const [deletingId, setDeletingId] = useState<string | null>(null);
//   const [errorOpen, setErrorOpen] = useState(false);

//   const load = async () => {
//     setTnsLoading(true);
//     try {
//       const res = await axios.get("/api/transactions");
//       setTimeout(() => {
//         settingData(res.data);
//         setTnsLoading(false);
//       }, 1000);
//     } catch (error) {
//       console.error("Error loading data:", error);
//       setTnsLoading(false);
//       setErrorOpen(true);
//     }
//   };

//   const del = async (id: string) => {
//     setDeletingId(id);
//     try {
//       await axios.delete(`/api/transactions/${id}`);
//       toast.success("Transaction deleted");
//       load();
//     } catch {
//       toast.error("Failed to delete");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   return (
//     <div>
//       <h3 className="HeadMb h-[3rem] w-full rounded-[10px] text-black dark:text-white flex justify-center items-center ">
//         Personal Transactions
//       </h3>

//       {Tnsloading ? (
//         <div className="flex justify-center items-center h-[10rem]">
//           <Loader2 className="h-10 w-10 animate-spin text-primary" />
//         </div>
//       ) : data.length > 0 ? (
//         <table className="w-full table-fixed mt-4 mb-4">
//           <thead>
//             <tr className="tbTh text-black dark:text-white h-[3rem]">
//               <th className="w-[25%] px-2 border-r border-white text-center">Amount</th>
//               <th className="w-[25%] px-2 border-r border-white text-center">Description</th>
//               <th className="w-[25%] px-2 border-r border-white text-center">Date</th>
//               <th className="w-[25%] px-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((txn: any) => (
//               <tr key={txn._id} className="tbtd  text-white h-[3rem]">
//                 <td className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center">
//                   ₹ {txn.amount}
//                 </td>
//                 <td
//                   title={txn.description}
//                   className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center text-sm"
//                 >
//                   {txn.description || "No description"}
//                 </td>
//                 <td className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center">
//                   {new Date(txn.date).toLocaleDateString()}
//                 </td>
//                 <td className="text-center">
//                   <Button
//                     variant="destructive"
//                     className="w-[5rem] h-[2rem] rounded-[5px] mt-[6px] border-none cursor-pointer hover:bg-gray-600"
//                     onClick={() => del(txn._id)}
//                   >
//                     {deletingId === txn._id ? (
//                       <Loader2 className="animate-spin h-4 w-4" />
//                     ) : (
//                       "Delete"
//                     )}
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <Dialog open={open} onOpenChange={setOpen}>
//           <p className="w-full text-center">
//             <svg
//               width="280"
//               height="200"
//               viewBox="0 0 280 200"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="mx-auto"
//             >
//               <rect
//                 width="280"
//                 height="200"
//                 rx="12"
//                 className="rectC"
//               />
//               <g
//                 className="plus-btn"
//                 onClick={() => setOpen(true)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <circle cx="140" cy="90" r="20" fill="#2d2c33" />
//                 <path
//                   d="M132 90h16M140 82v16"
//                   stroke="#a1a1aa"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </g>
//               <text
//                 x="50%"
//                 y="150"
//                 textAnchor="middle"
//                 fill="#d4d4d8"
//                 fontFamily="Arial, sans-serif"
//                 fontSize="16"
//               >
//                 No Transactions Yet
//               </text>
//               <text
//                 x="50%"
//                 y="170"
//                 textAnchor="middle"
//                 fill="#a1a1aa"
//                 fontFamily="Arial, sans-serif"
//                 fontSize="12"
//               >
//                 Your transactions will appear here.
//               </text>
//             </svg>
//           </p>
//           <DialogContent className="bg-[#4F46E5] text-[#fff] z-10 rounded-[15px] w-[60%] h-[10rem]">
//             <DialogHeader>
//               <DialogTitle>Add a new transaction</DialogTitle>
//             </DialogHeader>
//             <TransactionForm setOpen={setOpen} />
//           </DialogContent>
//         </Dialog>
//       )}

//       <ServerErrorModal open={errorOpen} setOpen={setErrorOpen} />
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import ServerErrorModal from "@/components/ServerErrorModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TransactionForm from "./TransactionForm";

interface Transaction {
  _id: string;
  amount: number;
  description?: string;
  date: string;
}

interface Props {
  data: Transaction[];
  settingData: (data: Transaction[]) => void;
}

export default function TransactionList({ data, settingData }: Props) {
  const [open, setOpen] = useState(false);
  const [Tnsloading, setTnsLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [errorOpen, setErrorOpen] = useState(false);

  const load = async () => {
    setTnsLoading(true);
    try {
      const res = await axios.get("/api/transactions");
      setTimeout(() => {
        settingData(res.data);
        setTnsLoading(false);
      }, 1000);
    } catch {
      setTnsLoading(false);
      setErrorOpen(true);
    }
  };

  const del = async (id: string) => {
    setDeletingId(id);
    try {
      await axios.delete(`/api/transactions/${id}`);
      toast.success("Transaction deleted");
      load();
    } catch {
      toast.error("Failed to delete");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3 className="HeadMb h-[3rem] w-full rounded-[10px] text-black dark:text-white flex justify-center items-center">
        Personal Transactions
      </h3>

      {Tnsloading ? (
        <div className="flex justify-center items-center h-[10rem]">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : data.length > 0 ? (
        <table className="w-full table-fixed mt-4 mb-4">
          <thead>
            <tr className="tbTh text-black dark:text-white h-[3rem]">
              <th className="w-[25%] px-2 border-r border-white text-center">Amount</th>
              <th className="w-[25%] px-2 border-r border-white text-center">Description</th>
              <th className="w-[25%] px-2 border-r border-white text-center">Date</th>
              <th className="w-[25%] px-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((txn: Transaction) => (
              <tr key={txn._id} className="tbtd text-white h-[3rem]">
                <td className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center">
                  ₹ {txn.amount}
                </td>
                <td
                  title={txn.description}
                  className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center text-sm"
                >
                  {txn.description || "No description"}
                </td>
                <td className="overflow-hidden whitespace-nowrap text-ellipsis px-2 text-center">
                  {new Date(txn.date).toLocaleDateString()}
                </td>
                <td className="text-center">
                  <Button
                    variant="destructive"
                    className="w-[5rem] h-[2rem] rounded-[5px] mt-[6px] border-none cursor-pointer hover:bg-gray-600"
                    onClick={() => del(txn._id)}
                  >
                    {deletingId === txn._id ? (
                      <Loader2 className="animate-spin h-4 w-4" />
                    ) : (
                      "Delete"
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <p className="w-full text-center">
            <svg
              width="280"
              height="200"
              viewBox="0 0 280 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <rect width="280" height="200" rx="12" className="rectC" />
              <g
                className="plus-btn"
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <circle cx="140" cy="90" r="20" fill="#2d2c33" />
                <path
                  d="M132 90h16M140 82v16"
                  stroke="#a1a1aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <text
                x="50%"
                y="150"
                textAnchor="middle"
                fill="#d4d4d8"
                fontFamily="Arial, sans-serif"
                fontSize="16"
              >
                No Transactions Yet
              </text>
              <text
                x="50%"
                y="170"
                textAnchor="middle"
                fill="#a1a1aa"
                fontFamily="Arial, sans-serif"
                fontSize="12"
              >
                Your transactions will appear here.
              </text>
            </svg>
          </p>
          <DialogContent className="bg-[#4F46E5] text-[#fff] z-10 rounded-[15px] w-[60%] h-[10rem]">
            <DialogHeader>
              <DialogTitle>Add a new transaction</DialogTitle>
            </DialogHeader>
            <TransactionForm setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      )}

      <ServerErrorModal open={errorOpen} setOpen={setErrorOpen} />
    </div>
  );
}
