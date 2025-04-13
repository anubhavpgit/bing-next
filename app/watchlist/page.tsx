import { MovieCard } from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Tv } from "lucide-react"
import Link from "next/link"

export default function WatchlistPage() {
  // This would be fetched from the backend in a real application
  const savedMovies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 7, title: "Dune", year: 2021, rating: 8.0, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  const savedTVShows = [
    { id: 13, title: "Stranger Things", year: 2016, rating: 8.7, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 15, title: "Breaking Bad", year: 2008, rating: 9.5, posterUrl: "/placeholder.svg?height=450&width=300" },
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
                <Link href="/tv-shows" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="text-sm font-medium text-foreground">
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Watchlist</h1>
            <p className="mt-2 text-muted-foreground">Keep track of what you want to watch next</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="movies" className="flex items-center gap-2">
                <Film className="h-4 w-4" />
                Movies
              </TabsTrigger>
              <TabsTrigger value="tv" className="flex items-center gap-2">
                <Tv className="h-4 w-4" />
                TV Shows
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {savedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
                {savedTVShows.map((show) => (
                  <MovieCard key={show.id} movie={show} />
                ))}
                {savedMovies.length === 0 && savedTVShows.length === 0 && (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-muted-foreground">Your watchlist is empty</p>
                    <Button className="mt-4 bg-crimson-600 hover:bg-crimson-700" asChild>
                      <Link href="/dashboard">Discover content</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="movies" className="mt-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {savedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
                {savedMovies.length === 0 && (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-muted-foreground">No movies in your watchlist</p>
                    <Button className="mt-4 bg-crimson-600 hover:bg-crimson-700" asChild>
                      <Link href="/movies">Browse movies</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="tv" className="mt-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {savedTVShows.map((show) => (
                  <MovieCard key={show.id} movie={show} />
                ))}
                {savedTVShows.length === 0 && (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-muted-foreground">No TV shows in your watchlist</p>
                    <Button className="mt-4 bg-crimson-600 hover:bg-crimson-700" asChild>
                      <Link href="/tv-shows">Browse TV shows</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
