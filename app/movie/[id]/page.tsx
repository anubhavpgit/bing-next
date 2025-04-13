import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BookmarkPlus, Heart, Play, Share2, Star } from "lucide-react"
import Image from "next/image"

export default function MoviePage({ params }: { params: { id: string } }) {
  // This would be fetched from the backend in a real application
  const movie = {
    id: params.id,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2h 28m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "/placeholder.svg?height=600&width=400",
    backdropUrl: "/placeholder.svg?height=1080&width=1920",
  }

  // Similar movies would be fetched from the backend
  const similarMovies = [
    { id: 2, title: "The Matrix", year: 1999, rating: 8.7, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 3, title: "Interstellar", year: 2014, rating: 8.6, posterUrl: "/placeholder.svg?height=450&width=300" },
    { id: 4, title: "The Prestige", year: 2006, rating: 8.5, posterUrl: "/placeholder.svg?height=450&width=300" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-crimson-600">Bing</span>
          </div>
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
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <Image
            src={movie.backdropUrl || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container -mt-32 pb-12">
          <div className="grid gap-6 md:grid-cols-[300px_1fr] md:gap-12">
            <div className="relative aspect-[2/3] w-full max-w-[300px] overflow-hidden rounded-lg border border-border/50 shadow-xl">
              <Image src={movie.posterUrl || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <span>{movie.genres.join(", ")}</span>
                  <div className="ml-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium text-foreground">{movie.rating}</span>
                    <span>/10</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-crimson-600 hover:bg-crimson-700">
                  <Play className="mr-2 h-4 w-4" /> Watch Now
                </Button>
                <Button variant="outline">
                  <BookmarkPlus className="mr-2 h-4 w-4" /> Add to List
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="mt-2 text-muted-foreground">{movie.plot}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Cast & Crew</h2>
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Director:</span>
                    <span className="text-muted-foreground">{movie.director}</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium">Cast:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {movie.cast.map((actor) => (
                        <span
                          key={actor}
                          className="inline-flex rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {actor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h2 className="text-xl font-semibold">Similar Movies</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
                  {similarMovies.map((similarMovie) => (
                    <div key={similarMovie.id} className="group cursor-pointer">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                        <Image
                          src={similarMovie.posterUrl || "/placeholder.svg"}
                          alt={similarMovie.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-2">
                        <h3 className="font-medium group-hover:text-red-600">{similarMovie.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{similarMovie.year}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            <span>{similarMovie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
