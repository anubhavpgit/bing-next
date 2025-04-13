import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CategoriesPage() {
  // This would be fetched from the backend in a real application
  const categories = [
    { id: "action", name: "Action" },
    { id: "adventure", name: "Adventure" },
    { id: "animation", name: "Animation" },
    { id: "comedy", name: "Comedy" },
    { id: "crime", name: "Crime" },
    { id: "documentary", name: "Documentary" },
    { id: "drama", name: "Drama" },
    { id: "family", name: "Family" },
    { id: "fantasy", name: "Fantasy" },
    { id: "history", name: "History" },
    { id: "horror", name: "Horror" },
    { id: "music", name: "Music" },
    { id: "mystery", name: "Mystery" },
    { id: "romance", name: "Romance" },
    { id: "science-fiction", name: "Science Fiction" },
    { id: "thriller", name: "Thriller" },
    { id: "war", name: "War" },
    { id: "western", name: "Western" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-crimson-600">Bing</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">Select your favorite genres</h1>
            <p className="text-muted-foreground">
              Choose the genres you enjoy watching. This helps us fine-tune your recommendations.
            </p>
          </div>
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Step 2 of 2</span>
              <span className="text-sm text-muted-foreground">Categories</span>
            </div>
            <Progress value={100} className="h-2 bg-muted" indicatorClassName="bg-crimson-600" />
          </div>
          <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative cursor-pointer rounded-md border border-border bg-card p-4 transition-all hover:border-crimson-600/50 hover:bg-crimson-600/5"
              >
                <input
                  type="checkbox"
                  id={category.id}
                  name="categories"
                  value={category.id}
                  className="peer absolute right-2 top-2 h-4 w-4 cursor-pointer rounded border-primary text-crimson-600 focus:ring-crimson-600"
                />
                <label htmlFor={category.id} className="block cursor-pointer font-medium peer-checked:text-crimson-600">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <Button variant="outline">Skip</Button>
            <Button className="bg-crimson-600 hover:bg-crimson-700" asChild>
              <Link href="/dashboard">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
