import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <Link href="/" className="px-4">Home</Link>
          <Link href="/about" className="px-4">About</Link>
          <Link href="/blog" className="px-4">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
