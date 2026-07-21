"use client";

import Link from "next/link";

// Import brands from Simple Icons (si) or Font Awesome (fa)
import { SiGithub, SiLabview, SiX, SiDiscord } from "react-icons/si";

import { footerLinks } from "../../data/footer-link";

import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="text-2xl font-bold">
              {siteConfig.name}
            </Link>

            <p className="max-w-md text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="flex gap-4">
              <Link href={siteConfig.socialLinks.github}>
                <SiGithub className="size-5 hover:text-primary transition" />
              </Link>

              <Link href={siteConfig.socialLinks.twitter}>
                <SiX className="size-5 hover:text-primary transition" />
              </Link>

              <Link href={siteConfig.socialLinks.linkedin}>
                <SiLabview className="size-5 hover:text-primary transition" />
              </Link>

              <Link href={siteConfig.socialLinks.discord}>
                <SiDiscord className="size-5 hover:text-primary transition" />
              </Link>
            </div>
          </div>

          {/* Links */}

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
