"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Plus, X } from "lucide-react"
import Link from "next/link"

export function OnboardingForm() {
  const [movies, setMovies] = useState<string[]>(["", "", "", "", "", "", "", "", "", ""])
  const [currentMovie, setCurrentMovie] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleAddMovie = () => {
    if (!currentMovie.trim()) {
      setError("Please enter a movie title")
      return
    }

    // In a real app, we would validate against IMDB dataset here
    // For now, we'll just add it to the list
    const emptyIndex = movies.findIndex((movie) => !movie)
    if (emptyIndex !== -1) {
      const newMovies = [...movies]
      newMovies[emptyIndex] = currentMovie
      setMovies(newMovies)
      setCurrentMovie("")
      setError(null)
    }
  }

  const handleRemoveMovie = (index: number) => {
    const newMovies = [...movies]
    newMovies[index] = ""
    setMovies(newMovies)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddMovie()
    }
  }

  const filledMoviesCount = movies.filter((movie) => movie).length

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="movie">Add your favorite movies (up to 10)</Label>
          <div className="flex gap-2">
            <Input
              id="movie"
              placeholder="Enter a movie title"
              value={currentMovie}
              onChange={(e) => {
                setCurrentMovie(e.target.value)
                setError(null)
              }}
              onKeyDown={handleKeyDown}
            />
            <Button
              type="button"
              onClick={handleAddMovie}
              disabled={filledMoviesCount >= 10 || !currentMovie.trim()}
              className="bg-crimson-600 hover:bg-crimson-700"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add movie</span>
            </Button>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Your selections ({filledMoviesCount}/10)</Label>
            <span className="text-xs text-muted-foreground">
              {filledMoviesCount < 3 ? "Add at least 3 movies" : ""}
            </span>
          </div>
          <div className="grid gap-2">
            {movies.map((movie, index) =>
              movie ? (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md border border-border bg-card p-2"
                >
                  <span>{movie}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveMovie(index)}
                    className="h-6 w-6 rounded-full"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove {movie}</span>
                  </Button>
                </div>
              ) : null,
            )}
            {filledMoviesCount === 0 && (
              <div className="rounded-md border border-dashed border-border p-4 text-center text-muted-foreground">
                No movies added yet. Add your favorites above.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-crimson-600 hover:bg-crimson-700" disabled={filledMoviesCount < 3} asChild>
          <Link href="/onboarding/categories">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
