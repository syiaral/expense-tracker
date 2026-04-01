// 'use client' berguna untuk memastikan bahwa komponen ini dijalankan
// di sisi klien, bukan di sisi server. Ini penting karena komponen ini menggunakan
// state dan event handler yang hanya bisa dijalankan di lingkungan klien (browser).
// Tanpa 'use client', Next.js akan mencoba menjalankan komponen ini di server,
// yang akan menyebabkan error karena tidak ada akses ke state atau event handler di server.
"use client";

// import { useState } from 'react'
import { useState } from "react";

export default function FormTransaction({ onTambah }) {
  const [form, setForm] = useState({
    keterangan: "",
    nominal: "",
    tipe: "pengeluaran",
    kategori: "makanan",
    tanggal: new Date().toString().split("T")[0],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.keterangan || !form.nominal) {
      alert("Keterangan dan nominal wajib diisi!");
      return;
    }
    onTambah({
      ...form,
      nominal: parseInt(form.nominal),
      id: Date.now(),
    });
    setForm({
      keterangan: "",
      nominal: "",
      tipe: "pengeluaran",
      kategori: "makanan",
      tanggal: new Date().toISOString().split("T")[0],
    });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gary-200 rounded-xl p-6 flex flex-col gap-4"
    >
      <h2 className="font-semibold text-gray-800">Tambah Transaksi</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-grey-600 mb-1 block">Tipe</label>
          <select
            name="tipe"
            value={form.tipe}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none
                        focus:border-gray-400"
          >
            <option value="pengeluaran">Pengeluaran</option>
            <option value="pemasukan">Pemasukan</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-grey-600 mb-1 block">Kategori</label>
          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none
                        focus:border-gray-400"
          >
            <option value="makanan">Makanan</option>
            <option value="transportasi">Transportasi</option>
            <option value="belanja">Belanja</option>
            <option value="hiburan">Hiburan</option>
            <option value="gaji">Gaji</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 mb-1 block">Keterangan</label>
          <input
            type="text"
            name="keterangan"
            value={form.keterangan}
            onChange={handleChange}
            placeholder="contoh: makan siang, gaji bulan ini..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-col2 gap 4">
        <div>
          <label for="" className="text-sm text-gray-600 mb-1 block">
            Nominal (Rp)
          </label>
          <input
            type="number"
            name="nominal"
            value={form.nominal}
            onChange={handleChange}
            placeholder="50000"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm
            outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label for="" className="text-sm text-gray-600 mb-1 block">
            Tanggal
          </label>
          <input
            type="date"
            name="tanggal"
            value={form.tanggal}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm
            outline-none focus:border-gray-400"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
      >
        + Tambah Transaksi
      </button>
    </form>
  );
}
