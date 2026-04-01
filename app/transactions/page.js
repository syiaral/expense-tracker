export default function Transactions() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>
        <button className="bg-black text-white mx-6 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
          + Tambah Transaksi
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-gray-400 text-sm text-center py-8">
          Belum ada transaksi
        </p>

      </div>
    </main>
  );
}

