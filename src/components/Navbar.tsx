"use client";

import * as React from "react";
import {
  Sun,
  Moon,
  // Grid,
  // List,
  User,
  Headphones,
  ImagePlus,
  Bell,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch
    return null;
  }
  // const navLinks = {
  //   left: [
  //     {
  //       icon: <User className="h-5 w-5 text-foreground" />,
  //       label: "Profile View",
  //     },
  //     {
  //       icon: <Grid className="h-5 w-5 text-foreground" />,
  //       label: "Grid View",
  //     },
  //     {
  //       icon: <List className="h-5 w-5 text-foreground" />,
  //       label: "List View",
  //     },
  //   ],
  // };

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur-md flex items-center justify-between gap-6 px-2 md:px-4 h-16 md:h-18 max-w-screen-xl mx-auto">
      <div className="flex gap-2 items-center">
        <Button
          size="icon"
          variant={"outline"}
          aria-label="Profile View"
          className="hover:bg-muted p-2"
        >
          <User className="h-5 w-5 text-foreground" />
        </Button>
        <h1 className="font-mono">LOGO</h1>
      </div>
      <div className="flex gap-2 items-center">
        {/* Example nav icons for different views */}
        <Button
          variant={"outline"}
          aria-label="Support"
          className="hover:bg-muted p-2 hidden sm:flex"
        >
          <Headphones className="h-5 w-5 text-foreground" />
          Support
        </Button>
        <Button
          variant={"outline"}
          aria-label="Gallery"
          className="hover:bg-muted p-2"
        >
          <ImagePlus className="h-5 w-5 text-foreground" />
          Gallery
        </Button>
        <Button
          size="icon"
          variant={"link"}
          aria-label="Notifications"
          className="hover:bg-muted p-2"
        >
          <Bell className="h-5 w-5 text-foreground" />
        </Button>
        {/* Theme toggle Button */}
        <Button
          size="icon"
          variant={"link"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Dark Mode"
          className="hover:bg-muted transition"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-foreground" />
          ) : (
            <Moon className="h-5 w-5 text-foreground" />
          )}
        </Button>
      </div>
    </nav>
  );
}
