"use client";
import { ReactNode } from "react";

export function TopNavigation({ children }: { children?: ReactNode }) {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {children}
        </div>
      </div>
    </nav>
  );
}

