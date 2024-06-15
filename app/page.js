import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Shipex home page</h1>
      <div className="flex gap-2">
        <Link href={"/auth/registration"} className="text-blue-500">
          Register
        </Link>
        <Link href={"/auth/signin"} className="text-blue-500">
          SignIn
        </Link>
      </div>
      <div className="flex gap-2">
        <h1>Verify your KYC</h1>
        <Link href={"/KYC"} className="text-blue-500">
          Verify
        </Link>
      </div>
    </div>
  );
}
