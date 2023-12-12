// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <Link href="/">
            Your Logo
          </Link>
        </div>

        {/* Menu Items */}
        <div className="space-x-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/contact" className="text-white">Contact</Link>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
