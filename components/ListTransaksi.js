export default function ListTransactions({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white border -border-gray-300 px-4 rounded-xl">
        <p className="text-gray-500 text-center py-10">Belum ada transaksi</p>
      </div>
    );
  }
  return (
    <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-200">
      {transactions.map((item) => (
        <div
          className="flex items-center justify-between px-4 py-3"
          key={item.id}
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">
              {item.keterangan}
            </span>
            <span className="text-xs text-gray-400">
              {item.kategori} ·{item.tanggal}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className={`text-sm font-semibold ${item.tipe === "pemasukan" ? "text-green-600" : "text-red-500"}`}
            >
              {item.tipe === "pemasukan" ? "+" : "-"}Rp
              {item.nominal.toLocaleString("id")}
            </span>
            <button
              onClick={() => onDelete(item.id)}
              className="text-gray-300 hover:text-red-400 text-xs cursor-pointer transition-colors"
            >
              hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
