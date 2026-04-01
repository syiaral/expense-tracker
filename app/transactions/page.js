"use client";

import { useState } from "react";
import FormTransaction from "@/components/FormTransaction";
import ListTransaksi from "@/components/ListTransaksi";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  function TambahTransactions(data) {
    setTransactions([data, ...transactions]);
  }

  function HapusTransactions(id) {
    setTransactions(transactions.filter((item) => item.id !== id));
  }
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Transactions
      </h1>
      <div className="flex flex-col gap-6">
        <FormTransaction onTambah={TambahTransactions} />
        <ListTransaksi transactions={transactions} onDelete={HapusTransactions} />
      </div>
    </main>
  );
}
