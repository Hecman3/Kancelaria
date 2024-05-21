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
          <span className="block">Kancelaria Adwokacka</span>{" "}
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
              {linkArray.map((link) => (
                <li key={link.key}>
                  <Link
                    onClick={() => setSheetOpen(false)}
                    href={link.path}
                    className={`px-3 py-2 block rounded-md ${pathname === link.path ? "bg-primary/20" : "hover:bg-zinc-100 active:bg-zinc-200"}`}
                  >
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <ul className="hidden md:flex gap-3">
          {linkArray.map((link) => {
            if (link.path === "/") return;
            return (
              <li key={link.key}>
                <Link
                  href={link.path}
                  className={`px-3 transition-colors ease-out py-2 inline-block border-y-2 border-y-transparent ${pathname === link.path ? "border-b-primary" : "hover:border-b-zinc-300"}`}
                >
                  {link.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
