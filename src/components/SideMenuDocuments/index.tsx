import Logo from "@/assets/logo/logo.svg";
import Discord from "@/assets/social-icons/discord.svg";
import LinkedIn from "@/assets/social-icons/linkedin.svg";
import Telegram from "@/assets/social-icons/telegram.svg";
import X from "@/assets/social-icons/x.svg";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const mainLinks = [
  { label: "About", href: "/documents/about" },
  { label: "Solvium Glossary", href: "/documents/glossary" },
  { label: "Solvium’s Ecosystem", href: "/documents/ecosystem" },
  { label: "CDM", href: "/documents/cdm" },
  { label: "Privacy Policy", href: "/documents/privacy" },
  { label: "Term & Conditions", href: "/documents/terms" },
];

const socialIcons = [
  {
    label: "Linked in",
    icon: LinkedIn,
    url: "https://www.linkedin.com/company/solviumai/",
  },
  { label: "X", icon: X, url: "https://x.com/solviumai" },
  { label: "Telegram", icon: Telegram, url: "https://t.me/solviumai" },
  {
    label: "Discord",
    icon: Discord,
    url: "https://discord.com/invite/Bxsgu9MFjB",
  },
];

const otherLinks = [{ label: "Support", href: "/support" }];

export function SidebarDocumentContent({ close }: { close?: () => void }) {
  return (
    <div className="h-full w-full bg-[#161616] text-[#AFAFAF] flex flex-col justify-between py-10 px-4 overflow-y-auto">
      <div>
        {/* Logo */}
        <Link to={"/"} className="!p-0">
          <img src={Logo} alt="Solvium Logo" className="h-7 md:h-8 w-auto" />
        </Link>

        <hr className="my-6 border-[#4f4f4f]" />

        {/* Main nav */}
        <nav className="space-y-1">
          {mainLinks.map((item) => {
            const isActive = item.href === window.location.pathname;

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={close}
                className={cn(
                  "flex items-center justify-start gap-3 px-3 py-2 rounded-lg hover:bg-muted-foreground/10 text-muted transition-colors",
                  isActive && "bg-primary text-[#181818] "
                )}
              >
                <span className="text-base xl:text-lg font-bold">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Other links */}
        <div className="mt-6">
          <p className="text-sm text-foreground px-3 mb-2">Other</p>
          <div className="space-y-1">
            {otherLinks.map((item) => {
              const isActive = item.href === window.location.pathname;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={close}
                  className={cn(
                    "flex items-center justify-start gap-3 px-3 py-2 rounded-lg hover:bg-muted-foreground/10 text-muted transition-colors",
                    isActive && "bg-primary text-[#181818] "
                  )}
                >
                  <span className="text-base xl:text-lg font-bold">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer social icons */}
      <div className="flex items-center justify-between gap-4 px-2">
        {socialIcons?.map((data) => (
          <Link target="_" to={data?.url} className="hover:text-white ">
            <img
              src={data?.icon}
              alt={data?.label + "icon"}
              className="h-5 w-5 md:h-6 md:w-6 min-w-5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SideMenuDocuments() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full w-full">
        <SidebarDocumentContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden p-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="p-2 rounded-lg bg-gray-800 text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 bg-black text-white w-64 animate-slide-in"
          >
            <SidebarDocumentContent close={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
