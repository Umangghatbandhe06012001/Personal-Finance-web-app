// "use client";

// import { useEffect } from "react";
// import {
//   BarChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Bar,
//   ResponsiveContainer,
// } from "recharts";

// export default function ExpensesBarChart({
//   data,
// }: {
//   data: { month: string; amount: number }[] | null;
// }) {
//   useEffect(() => {
//     console.log("BarChart received data:", data);
//   }, [data]);

//   if (data === null) {
//     return (
//       <div className="flex items-center justify-center h-[20rem] rounded-[10px] m-3 text-muted-foreground text-sm border border-dashed">
//         Loading chart data... ⏳
//       </div>
//     );
//   }

//   return data.length > 0 ? (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="amount" fill="#8884d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   ) : (
//     <div className="flex items-center justify-center w-[98%] h-[18rem] rounded-[10px] m-3 text-muted-foreground text-sm border border-dashed">
//       No data available to display 📉
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function ExpensesBarChart({
  data,
}: {
  data: { month: string; amount: number }[] | null;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("BarChart received data:", data);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-[20rem] rounded-[10px] m-3 text-muted-foreground text-sm border border-dashed">
        Loading chart data... ⏳
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center w-[98%] h-[18rem] rounded-[10px] m-3 text-muted-foreground text-sm border border-dashed">
        No data available to display 📉
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
