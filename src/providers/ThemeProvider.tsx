"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col gap-6">
        <Navbar />
        {children}
      </div>
    </NextThemesProvider>
  );
}
