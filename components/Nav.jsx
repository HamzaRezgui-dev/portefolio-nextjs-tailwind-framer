"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/services", label: "services" },
  { href: "/resume", label: "resume" },
  { href: "/work", label: "work" },
  { href: "/contact", label: "contact" },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            link.href === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
