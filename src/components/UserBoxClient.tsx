"use client";

import { cn } from "@/shared/lib";
import { Box } from "@/shared/ui";
import { useState } from "react";

export function UserBoxClient({
  user,
}: {
  user: { id: string; name: string };
}) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => setIsClicked((prev) => !prev);

  return (
    <Box
      width={250}
      height={200}
      tabIndex={0}
      role="button"
      onClick={toggleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleClick();
        }
      }}
      className={cn(
        "cursor-pointer transition-colors duration-300 my-5",
        isClicked ? "bg-green-500" : "bg-red-500",
      )}
      text={user.name}
    />
  );
}
