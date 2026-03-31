// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav style={{
//       display: 'flex',
//       gap: '24px',
//       padding: '16px 24px',
//       borderBottom: '1px solid #e5e7eb',
//       backgroundColor: '#fff'
//     }}>
//       <Link href="/dashboard">Dashboard</Link>
//       <Link href="/transactions">Transaksi</Link>
//       <Link href="/login">Login</Link>
//     </nav>
//   )
// }
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "24px",
        padding: "16px 24px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#fff",
      }}
    >
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/transactions">Transactions</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
