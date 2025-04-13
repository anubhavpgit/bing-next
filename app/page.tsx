import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-crimson-600">Bing</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-crimson-600 hover:bg-crimson-700" asChild>
              <Link href="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background">
            <div className="absolute inset-0 bg-black/50" />
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Movie collage"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="container relative z-10 flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Discover your next <span className="text-crimson-600">favorite</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Personalized movie and TV show recommendations based on what you love.
            </p>
            <Button size="lg" className="mt-4 bg-crimson-600 hover:bg-crimson-700" asChild>
              <Link href="/onboarding">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        <section className="container py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson-600/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-crimson-600"
                >
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Personalized</h3>
              <p className="text-muted-foreground">Tell us your favorites and we'll find what you'll love next.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson-600/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-crimson-600"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Curated</h3>
              <p className="text-muted-foreground">Discover hidden gems and critically acclaimed content.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson-600/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-crimson-600"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M20 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Connected</h3>
              <p className="text-muted-foreground">Find where to watch across all your streaming services.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bing. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
