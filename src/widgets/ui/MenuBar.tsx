"use client";
import Link from "next/link";
import type { IMenuBar } from "./menu";
import { cn } from "@/shared/lib";
import { usePathname } from "next/navigation";

interface MenuBarProps {
  menuBar: IMenuBar;
  className?: string;
}

export function MenuBar({ menuBar, className }: MenuBarProps) {
  const pathname = usePathname();
  return (
    <Link
      href={menuBar.href}
      aria-label={menuBar.title}
      className={cn(
        "flex items-center gap-2 text-gray-400 hover:text-white transition-colors",
        className,
        pathname === menuBar.href && "text-red-500",
      )}
    >
      {menuBar.icon}
    </Link>
  );
}
