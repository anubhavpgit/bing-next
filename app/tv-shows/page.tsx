import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronRight, Film, Tv } from "lucide-react"
import Link from "next/link"

export default function TVShowsPage() {
  // This would be fetched from the backend in a real application
  const popularTVShows = [
    { id: 13, title: "Stranger Things", year: 2016, rating: 8.7, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 14, title: "Game of Thrones", year: 2011, rating: 9.2, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 15, title: "Breaking Bad", year: 2008, rating: 9.5, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 16, title: "The Mandalorian", year: 2019, rating: 8.7, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 17, title: "The Witcher", year: 2019, rating: 8.2, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 18, title: "The Last of Us", year: 2023, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const newReleases = [
    {
      id: 19,
      title: "House of the Dragon",
      year: 2022,
      rating: 8.5,
      posterUrl: "/placeholder.svg?height=450&width=300",
    },
    { id: 20, title: "The Bear", year: 2022, rating: 8.6, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 21, title: "Severance", year: 2022, rating: 8.7, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 22, title: "The White Lotus", year: 2021, rating: 7.9, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 23, title: "Succession", year: 2018, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 24, title: "Yellowjackets", year: 2021, rating: 7.9, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const criticallyAcclaimed = [
    { id: 25, title: "The Wire", year: 2002, rating: 9.3, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 26, title: "The Sopranos", year: 1999, rating: 9.2, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 27, title: "Chernobyl", year: 2019, rating: 9.4, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 28, title: "Band of Brothers", year: 2001, rating: 9.4, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 29, title: "Planet Earth II", year: 2016, rating: 9.5, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 30, title: "Better Call Saul", year: 2015, rating: 8.9, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const genres = [
    "Drama",
    "Comedy",
    "Action",
    "Sci-Fi",
    "Fantasy",
    "Horror",
    "Crime",
    "Documentary",
    "Animation",
    "Reality",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-crimson-600">Bing</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="text-sm font-medium text-foreground">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  My List
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
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
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
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
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
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
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">TV Shows</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Tv className="h-4 w-4" /> All Shows
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Film className="h-4 w-4" /> New & Popular
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Browse by Genre</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Button key={genre} variant="outline" size="sm" className="rounded-full">
                  {genre}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Popular TV Shows</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea>
                <div className="flex gap-4 pb-4">
                  {popularTVShows.map((show) => (
                    <MovieCard key={show.id} movie={show} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">New Releases</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea>
                <div className="flex gap-4 pb-4">
                  {newReleases.map((show) => (
                    <MovieCard key={show.id} movie={show} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Critically Acclaimed</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea>
                <div className="flex gap-4 pb-4">
                  {criticallyAcclaimed.map((show) => (
                    <MovieCard key={show.id} movie={show} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
