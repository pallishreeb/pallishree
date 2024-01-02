/** @format */

import React from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
export default function Navbar() {
  return (
    <div className="flex justify-between border-b  px-6 border-slate-700">
      <Header />

      <MobileMenu />
    </div>
  );
}
