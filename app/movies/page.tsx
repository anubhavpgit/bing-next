import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronRight, Film, Tv } from "lucide-react"
import Link from "next/link"

export default function MoviesPage() {
  // This would be fetched from the backend in a real application
  const popularMovies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
    {
      id: 2,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      posterUrl: "/placeholder.svg?height=450&width=300",
    },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 4, title: "Pulp Fiction", year: 1994, rating: 8.9, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 5, title: "Fight Club", year: 1999, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 6, title: "Forrest Gump", year: 1994, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const newReleases = [
    { id: 7, title: "Dune", year: 2021, rating: 8.0, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 8, title: "No Time to Die", year: 2021, rating: 7.3, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 9, title: "The Batman", year: 2022, rating: 7.9, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 10, title: "Top Gun: Maverick", year: 2022, rating: 8.3, posterUrl: "/placeholder.svg?height=450&width=300" },
    {
      id: 11,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 7.9,
      posterUrl: "/placeholder.svg?height=450&width=300",
    },
    { id: 12, title: "The Northman", year: 2022, rating: 7.1, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const oscarsWinners = [
    { id: 31, title: "Parasite", year: 2019, rating: 8.5, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 32, title: "Nomadland", year: 2020, rating: 7.3, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 33, title: "CODA", year: 2021, rating: 8.0, posterUrl: "/placeholder.svg?height=450&width=300" },
    {
      id: 34,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 7.9,
      posterUrl: "/placeholder.svg?height=450&width=300",
    },
    { id: 35, title: "Moonlight", year: 2016, rating: 7.4, posterUrl: "/placeholder.svg?height=450&width=300" },
    {
      id: 36,
      title: "The Shape of Water",
      year: 2017,
      rating: 7.3,
      posterUrl: "/placeholder.svg?height=450&width=300",
    },
  ]

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Sci-Fi",
    "Thriller",
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
                <Link href="/movies" className="text-sm font-medium text-foreground">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="text-sm font-medium text-muted-foreground hover:text-foreground">
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
            <h1 className="text-3xl font-bold">Movies</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Film className="h-4 w-4" /> All Movies
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Tv className="h-4 w-4" /> New & Popular
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
                <h2 className="text-2xl font-bold">Popular Movies</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea>
                <div className="flex gap-4 pb-4">
                  {popularMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
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
                  {newReleases.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Oscar Winners</h2>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  See all <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea>
                <div className="flex gap-4 pb-4">
                  {oscarsWinners.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
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
