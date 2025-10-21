import Link from "next/link"
import { Calendar, Coins, FileText } from "lucide-react"

export default function Home() {
  const solutions = [
    {
      id: "a1",
      title: "Event Scheduler",
      description: "Manage events with intelligent conflict detection and smart scheduling suggestions",
      icon: Calendar,
      href: "/scheduler",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "b1",
      title: "Hedera Token",
      description: "Create and transfer fungible tokens on the Hedera network with multi-account distribution",
      icon: Coins,
      href: "/hedera",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "c1",
      title: "Digital Identity",
      description: "Comprehensive research on blockchain-based digital identity management and certification",
      icon: FileText,
      href: "/identity",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
        <div className="relative px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Task Solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three comprehensive solutions for event scheduling, blockchain tokens, and digital identity management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <Link key={solution.id} href={solution.href}>
                    <div className="group h-full p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{solution.description}</p>
                      <div className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                        View Solution →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
