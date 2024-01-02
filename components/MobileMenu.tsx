/** @format */
"use client"
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const navItems = [
    { label: "_Home", href: "/" },
    { label: "_About-me", href: "#about" },
    { label: "_Projects", href: "#projects" },
    { label: "_Contact me", href: "#contact" },
  ];
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className=" lg:hidden  hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="p-0 h-full   border-0 bg-inherit  ">
        <ul className=" w-full text-center text-lg">
          {navItems.map((item) => (
            <li
              className="py-8  text-white border-b border-b-slate-700"
              key={`mobile-${item}`}
            >
              <SheetClose asChild>
              <Link href={item.href} scroll={true}>
                {item.label}
              </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
