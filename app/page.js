import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Shipex home page</h1>
      <h1>Verify your KYC</h1>
      <Link href={"/mainPage"} className="text-blue-500">Verify</Link>
   </div>
  );
}
