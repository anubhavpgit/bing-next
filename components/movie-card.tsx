import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Movie {
  id: number
  title: string
  year: number
  rating: number
  posterUrl: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group w-[180px] overflow-hidden border-border/50 transition-all hover:border-crimson-600/50 hover:shadow-md">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          <Image
            src={movie.posterUrl || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-3">
          <h3 className="line-clamp-1 font-medium group-hover:text-crimson-600">{movie.title}</h3>
          <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
            <span>{movie.year}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
              <span>{movie.rating}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
