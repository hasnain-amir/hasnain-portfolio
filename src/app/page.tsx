import Image from "next/image";
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

      <main id="main-content">
        <section aria-label="Introduction">
          <figure>
            <Image
              src="/images/portrait.webp"
              alt="Portrait of Hasnain."
              width={800}
              height={1000}
              sizes="(min-width: 768px) 24rem, 100vw"
              preload
            />

            <figcaption>
              Second-year Computer Science, Aston University.
            </figcaption>
          </figure>

          {/* TODO: Add links to the booking system and Asl once their URLs are established */}
          <p>
            Hasnain is a developer with an eye for design and 1+ years of
            experience building software. Most recently, he has been building a
            booking system that any business can rebrand as its own. He’s
            interested in bridging design and engineering, and in crafting
            focused tools like{" "}
            <bdi lang="ar" dir="rtl">
              أصل
            </bdi>{" "}
            (Asl), a Quran and prayer app that works offline.
          </p>
        </section>
      </main>
    </>
  );
}
