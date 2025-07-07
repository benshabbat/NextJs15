import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={38} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
