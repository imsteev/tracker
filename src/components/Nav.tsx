"use client";
import { serverUrl } from "@/lib/url";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavLinks = () => {
  const pathname = usePathname();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch(serverUrl("/expenses"))
      .then((res) => res.json())
      .then((expSum) => {
        setTotal(expSum.total);
      });
  }, [pathname]);

  return (
    <div className="flex w-full justify-between p-2 bg-indigo-800 text-white">
      <div className="flex gap-2 ">
        <Link
          href="/expenses"
          className={clsx(undefined, {
            underline: pathname == "/expenses" || pathname == "/",
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
