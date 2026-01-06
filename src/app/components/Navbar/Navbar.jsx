"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navs = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
  ];

  const isActive = (link) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="relative max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul
          className={`flex flex-col md:flex-row gap-6 md:gap-10 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {navs.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                onClick={() => setOpen(false)}
                className={`${
                  isActive(nav.link)
                    ? "text-blue-600 font-medium"
                    : "text-gray-800"
                } hover:text-blue-500`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
