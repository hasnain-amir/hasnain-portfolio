import Link from "next/link";
import { RotatingStatus } from "./rotating-status";

const navigationItems = [
  { href: "#work", label: "Work" },
  { href: "#experiments", label: "Experiments" },
  { href: "#notes", label: "Notes" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
] as const;

export default function HomePage() {
  return (
    <>
      <a href="#main-content">Skip to content</a>

      <header id="top">
        <RotatingStatus />

        <div>
          <h1>
            <Link href="/">Hasnain Amir</Link>
          </h1>
          <p>Birmingham, UK</p>
        </div>

        <nav aria-label="Primary navigation">
          {navigationItems.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? <span aria-hidden="true"> · </span> : null}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </nav>
      </header>

      <main id="main-content" />
    </>
  );
}
