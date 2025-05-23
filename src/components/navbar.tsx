"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const session = localStorage.getItem("userSession");
    if (session) {
      try {
        const user = JSON.parse(session);
        setIsLoggedIn(true);
        setUserName(user.name || "User");
      } catch {
        setIsLoggedIn(false);
        setUserName("");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    setIsLoggedIn(false);
    setUserName("");
    setMenuOpen(false);
  };

  if (pathname === "/login") return null;

  return (
    <nav className="bg-[#2f4156] shadow-md py-4 px-8 text-white relative z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <p>TRESFLIX</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 items-center">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-400">
            Movies
          </Link>
          {isLoggedIn && (
            <div className="relative group">
              <button className="font-medium text-gray-200 flex items-center gap-1 hover:text-blue-400">
                Profile
              </button>
              <div className="absolute top-full mt-2 right-0 bg-white text-black rounded-lg shadow-md py-2 px-4 w-40 text-sm hidden group-hover:block z-50">
                <div className="font-semibold">
                  {userName}
                </div>
              </div>
            </div>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-blue-400 whitespace-nowrap"
            >
              Log out
            </button>
          ) : (
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-4 mt-2 w-48 bg-[#1f2a36] rounded-xl shadow-lg py-4 px-6 flex flex-col space-y-3 z-50">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-400">
            Movies
          </Link>
          {isLoggedIn && (
            <span className="text-gray-300 font-medium">{userName}</span>
          )}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-left hover:text-blue-400"
            >
              Log out
            </button>
          ) : (
            <Link href="/login" className="hover:text-blue-400">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
