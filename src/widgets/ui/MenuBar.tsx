"use client";
import Link from "next/link";
import type { IMenuBar } from "./menu";
import { cn } from "@/shared/lib";

interface MenuBarProps {
  menuBar: IMenuBar;
  className?: string;
}

export function MenuBar({ menuBar, className }: MenuBarProps) {
  return (
    <Link
      href={menuBar.href}
      aria-label={menuBar.title}
      className={cn(
        "flex items-center gap-2 text-gray-400 hover:text-white transition-colors",
        className,
      )}
    >
      {menuBar.icon}
    </Link>
  );
}
