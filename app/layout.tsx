/** @format */

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialProfiles from "@/components/SocialProfiles";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pallishree Behera",
  description:
    "Pallishree Behera is a full stack devloper with experties in nodejs,express,react,react-native,laravel,python,nextJs,angular,springboot... etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-full "}>
        <div className="w-full fixed top-0  z-40">
          <Navbar />
        </div>
        <div className="fixed top-[150px] z-50 left-0 ml-10 flex flex-col justify-center items-center gap-2 max-lg:hidden">
          <SocialProfiles />
        </div>
        <div className="">{children}</div>

        <div className=" w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
