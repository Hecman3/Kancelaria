"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { linkArray } from "@/data/subpages";

const Nav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="shadow py-1 sticky top-0 z-20 bg-white">
      <nav className="flex justify-between max-w-screen-xl mx-auto items-center pl-4 pr-3">
        <a href="/">
          <span className="block">Kancelaria adwokacka</span>{" "}
          <span className="uppercase">adwokat Marcin Hećman</span>
        </a>
        <Sheet
          open={sheetOpen}
          onOpenChange={() => setSheetOpen((prev) => !prev)}
        >
          <SheetTrigger className="block md:hidden p-1">
            <Menu className="h-7 w-7" />
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={() => setSheetOpen(false)}
                  href="/"
                  className="px-3 py-2 mt-2 block active:bg-zinc-200 rounded-md"
                >
                  Strona główna
                </Link>
              </li>
              {linkArray.map((link) => (
                <li key={link.key}>
                  <Link
                    onClick={() => setSheetOpen(false)}
                    href={link.path}
                    className={`px-3 py-2 block active:bg-zinc-200 rounded-md ${pathname === link.path ? "bg-primary/20" : ""}`}
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <ul className="hidden md:flex gap-3">
          {linkArray.map((link) => (
            <li key={link.key}>
              <Link
                href={link.path}
                className={`px-3 transition-colors ease-out py-2 inline-block border-y-2 border-y-transparent ${pathname === link.path ? "border-b-[#08a045]" : "hover:border-b-zinc-300"}`}
              >
                {link.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
