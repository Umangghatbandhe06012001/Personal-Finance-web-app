"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Transaction {
  _id: string;
  amount: number;
  description: string;
  date: string;
}

interface TransactionContextType {
  data: Transaction[];
  setData: (data: Transaction[]) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Transaction[]>([]);

  return (
    <TransactionContext.Provider value={{ data, setData }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
