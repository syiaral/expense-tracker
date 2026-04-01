import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="flex items-center gap-6 px-6 py-4 border-b border-grey-200
    bg-white"
    >
      <span className="font-semibold text-gray-800 mr-auto">
        💰 Expense Tracker
      </span>
      <Link
        href="/dashboard"
        className="text-gray-600 hover:text-black transition-colors"
      >
        Dashboard
      </Link>
      <Link
        href="/transactions"
        className="text-gray-600 hover:text-black transition-colors"
      >
        Transactions
      </Link>
      <Link
        href="/login"
        className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
      >
        Login
      </Link>
    </nav>
  );
}
