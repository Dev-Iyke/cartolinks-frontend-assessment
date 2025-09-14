import { User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-[#2f2f2f] flex items-center justify-between gap-6 px-2 md:px-4 h-24">
      <div className="flex gap-2 items-center">
        <Button
          size="icon"
          variant={"outline"}
          aria-label="Profile View"
          className="hover:bg-muted p-2"
        >
          <User className="h-5 w-5 text-foreground" />
        </Button>
        <h1 className="font-mono text-accent dark:text-foreground">LOGO</h1>
      </div>
      <div className="flex gap-2 items-center text-accent dark:text-foreground">
        <p className="font-medium">Curated by </p>
        <strong className="font-mono font-semibold text-xl md:text-3xl">
          Mobbin
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
