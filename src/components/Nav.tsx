"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-between p-2 bg-indigo-800 text-white">
      <div className="flex gap-2 ">
        <Link
          href="/"
          className={clsx(undefined, {
            underline: pathname == "/",
          })}
        >
          Expenses
        </Link>
        <Link
          href="/expenses/new"
          className={clsx(undefined, {
            underline: pathname == "/expenses/new",
          })}
        >
          New
        </Link>
      </div>
    </div>
  );
};
