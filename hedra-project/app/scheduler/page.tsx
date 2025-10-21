import EventScheduler from "@/components/event-scheduler"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SchedulerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
        <div className="relative px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Schedule Master
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organize your day with intelligent conflict detection and smart scheduling suggestions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <EventScheduler />
      </div>
    </main>
  )
}
