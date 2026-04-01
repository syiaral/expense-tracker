export default function Dashboard() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-600 mb-1">Total Pemasukan</p>
          <p className="text-2xl font-semibold text-green-700">Rp 0</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-600 mb-1">Total Pengeluaransukan</p>
          <p className="text-2xl font-semibold text-red-700">Rp 0</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-600 mb-1">Saldo</p>
          <p className="text-2xl font-semibold text-blue-700">Rp 0</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <p className="text-gray-400 text-sm text-center py-8">Belum ada transaksi. Tambah transaksi pertamamu!</p>
        </div>
      </div>
    </main>
  );
}
