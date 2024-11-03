"use client";
import { serverUrl } from "@/url";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavLinks = () => {
  const pathname = usePathname();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch(serverUrl("/expenses"))
      .then((res) => {
        return res.json();
      })
      .then((expSum) => {
        setTotal(expSum.total);
      });
  }, [pathname]);

  return (
    <div className="flex w-full justify-between p-2 bg-indigo-800 text-white">
      <div className="flex gap-2 ">
        <Link
          href="/"
          className={clsx(undefined, {
            underline: pathname == "/",
          })}
        >
          Home
        </Link>
        <Link
          href="/expenses"
          className={clsx(undefined, {
            underline: pathname == "/expenses",
          })}
        >
          Expenses
        </Link>
      </div>
      <div>Total: {total}</div>
    </div>
  );
};
