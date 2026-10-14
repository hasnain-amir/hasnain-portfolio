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

interface Technology {
  name: string;
  icon: string;
}

interface TechnologyListProps {
  technologies: readonly Technology[];
}

const projectTechnologies = {
  asl: [
    { name: "Tauri 2", icon: "/icons/tauri.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Rust", icon: "/icons/rust.svg" },
  ],
  bookingSystem: [
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Next.js", icon: "/icons/nextdotjs.svg" },
    { name: "Fastify", icon: "/icons/fastify.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  ],
  socLab: [
    { name: "Wazuh", icon: "/icons/wazuh.svg" },
    { name: "Elastic Stack", icon: "/icons/elastic.svg" },
    { name: "Linux VMs", icon: "/icons/linux.svg" },
    { name: "Windows VMs", icon: "/icons/windows.svg" },
    { name: "Sigma rules", icon: "/icons/sigma.svg" },
    { name: "Python", icon: "/icons/python.svg" },
  ],
} as const;

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <ul aria-label="Technologies used">
      {technologies.map((technology) => (
        <li key={technology.name}>
          <Image
            src={technology.icon}
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
          />
          <span>{technology.name}</span>
        </li>
      ))}
    </ul>
  );
}

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

          {/* TODO: Add links to the booking system and Asl once their public URLs are established. */}
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

        <section id="work" aria-labelledby="work-heading">
          <header>
            <h2 id="work-heading">Selected work</h2>

            <p>
              A few projects, with what I built and the decisions behind them.
            </p>
          </header>

          {/* TODO: Link each project to its case-study page once these routes exist:
              /work/asl
              /work/booking-system
              /work/home-soc-lab
          */}

          <ol>
            <li>
              <article aria-labelledby="asl-title">
                <header>
                  <p>Project 01</p>

                  <h3 id="asl-title">
                    Asl (
                    <bdi lang="ar" dir="rtl">
                      أصل
                    </bdi>
                    )
                  </h3>

                  <p>
                    An offline-first Islamic app bringing prayer, the Quran and
                    daily worship into one calm place.
                  </p>
                </header>

                <dl>
                  <div>
                    <dt>Status</dt>
                    <dd>Awaiting App Store review</dd>
                  </div>

                  <div>
                    <dt>Year</dt>
                    <dd>
                      <time dateTime="2026">2026</time>
                    </dd>
                  </div>

                  <div>
                    <dt>Stack</dt>
                    <dd>
                      <TechnologyList technologies={projectTechnologies.asl} />
                    </dd>
                  </div>
                </dl>

                <p>
                  Asl brings together prayer times, Quran reading, dhikr and
                  local mosque timetables in one calm experience that works
                  offline. Local prayer calculations and essential Quran content
                  are stored on the device, keeping the core experience
                  available without an internet connection. Structured learning
                  and drill-based practice are planned for a later release.
                </p>
              </article>
            </li>

            <li>
              <article aria-labelledby="booking-system-title">
                <header>
                  <p>Project 02</p>

                  <h3 id="booking-system-title">Booking system</h3>

                  <p>
                    One booking engine that any business can rebrand as its own.
                  </p>
                </header>

                <dl>
                  <div>
                    <dt>Status</dt>
                    <dd>In progress</dd>
                  </div>

                  <div>
                    <dt>Year</dt>
                    <dd>
                      <time dateTime="2026">2026</time>
                    </dd>
                  </div>

                  <div>
                    <dt>Stack</dt>
                    <dd>
                      <TechnologyList
                        technologies={projectTechnologies.bookingSystem}
                      />
                    </dd>
                  </div>
                </dl>

                <p>
                  A multi-tenant booking platform with shared scheduling logic
                  and a distinct customer-facing experience for each business.
                  The demo covers the complete booking journey, from selecting a
                  service and an available time to submitting customer details
                  and receiving confirmation. Business data is isolated through
                  tenant-scoped database relationships, PostgreSQL row-level
                  security and domain-based tenant resolution.
                </p>
              </article>
            </li>

            <li>
              <article aria-labelledby="soc-lab-title">
                <header>
                  <p>Project 03</p>

                  <h3 id="soc-lab-title">Home SOC lab</h3>

                  <p>
                    A home security operations lab that detects simulated
                    attacks and maps each detection to MITRE ATT&amp;CK.
                  </p>
                </header>

                <dl>
                  <div>
                    <dt>Status</dt>
                    <dd>Planned</dd>
                  </div>

                  <div>
                    <dt>Year</dt>
                    <dd>
                      <time dateTime="2026">2026</time>
                    </dd>
                  </div>

                  <div>
                    <dt>Stack</dt>
                    <dd>
                      <TechnologyList
                        technologies={projectTechnologies.socLab}
                      />
                    </dd>
                  </div>
                </dl>

                <p>
                  The Home SOC Lab will be a small blue-team environment where
                  logs from several virtual machines feed into a central SIEM.
                  It will include custom detection rules for common attacker
                  techniques, each mapped to MITRE ATT&amp;CK, alongside a
                  coverage matrix showing what is and is not detected. Simulated
                  attacks will run only inside the isolated lab, with the
                  findings documented in a report covering the setup,
                  detections, false positives and remaining gaps.
                </p>
              </article>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
