"use client";


import Header from "@/layout/Header";
import { usePathname } from "next/navigation";

export default function PathLayout(){
      const pathname =usePathname() || "";
  const layoutLess=["/about"]
  const hideLayout=layoutLess.includes(pathname)
    return(
        <>
                {!hideLayout && <Header />}

        </>
    )
}