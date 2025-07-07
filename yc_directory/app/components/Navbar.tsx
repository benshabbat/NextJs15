import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={38} />
        </Link>
        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>create</span>
              </Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              <button type="submit">Logout</button>
            </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span className="text-gray-600 hover:text-gray-900">
                  {session?.user?.name}
                </span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
