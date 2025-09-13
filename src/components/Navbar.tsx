"use client";

import * as React from "react";
import {
  Sun,
  Moon,
  Grid,
  List,
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
    <nav className="w-full border-b border-border bg-background/95 justify-between backdrop-blur-md flex items-center px-4 h-14 max-w-screen-xl mx-auto">
      <div className="flex gap-4 items-center">
        <Button
          size="icon"
          variant={"outline"}
          aria-label="Profile View"
          className="hover:bg-muted p-2 rounded-md"
        >
          <User className="h-5 w-5 text-foreground" />
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        {/* Example nav icons for different views */}
        <Button
          variant={"outline"}
          aria-label="Grid View"
          className="hover:bg-muted p-2 rounded-md"
        >
          <Headphones className="h-5 w-5 text-foreground" />
          Support
        </Button>
        <Button
          variant={"outline"}
          aria-label="Grid View"
          className="hover:bg-muted p-2 rounded-md"
        >
          <ImagePlus className="h-5 w-5 text-foreground" />
          Gallery
        </Button>
        <Button
          size="icon"
          variant={"outline"}
          aria-label="List View"
          className="hover:bg-muted p-2 rounded-md"
        >
          <Bell className="h-5 w-5 text-foreground" />
        </Button>
        {/* Theme toggle Button */}
        <Button
          size="icon"
          variant={"outline"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Dark Mode"
          className="hover:bg-muted p-2 rounded-md transition"
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
