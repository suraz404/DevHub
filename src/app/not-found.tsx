import Link from "next/link";
import { SearchX, ArrowLeft, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[80vh] items-center justify-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border bg-muted">
            <SearchX className="h-12 w-12 text-muted-foreground" />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Error 404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Sorry, the page you are looking for doesnot exist, may have been
            moved, or the URL might be incorrect.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 h-4 w-4" />
                Back Home
              </Button>
            </Link>

            <Link href="/tools">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Tools
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
