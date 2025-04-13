import { OnboardingForm } from "@/components/onboarding-form"
import { Progress } from "@/components/ui/progress"

export default function OnboardingPage() {
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
            <h1 className="mb-2 text-3xl font-bold">Tell us about your taste</h1>
            <p className="text-muted-foreground">
              Let's start by getting to know your favorite movies. This helps us recommend content you'll love.
            </p>
          </div>
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Step 1 of 2</span>
              <span className="text-sm text-muted-foreground">Favorite Movies</span>
            </div>
            <Progress value={50} className="h-2 bg-muted" indicatorClassName="bg-crimson-600" />
          </div>
          <OnboardingForm />
        </div>
      </main>
    </div>
  )
}
