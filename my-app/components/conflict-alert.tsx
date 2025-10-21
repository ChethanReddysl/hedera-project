"use client"

import type { Conflict } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface ConflictAlertProps {
  conflicts: Conflict[]
  suggestions: { event: string; suggestedTime: string }[]
}

export default function ConflictAlert({ conflicts, suggestions }: ConflictAlertProps) {
  return (
    <div className="space-y-4">
      {conflicts.length > 0 && (
        <Card className="border-l-4 border-l-destructive bg-gradient-to-r from-destructive/5 to-transparent p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-destructive mb-3">Scheduling Conflicts Detected</h3>
              <ul className="space-y-2">
                {conflicts.map((conflict, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                    <span>
                      <span className="font-semibold">{conflict.event1}</span> overlaps with{" "}
                      <span className="font-semibold">{conflict.event2}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {suggestions.length > 0 && (
        <Card className="border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-transparent p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-accent mb-3">Suggested Resolutions</h3>
              <ul className="space-y-2">
                {suggestions.map((suggestion, idx) => (
                  <li key={idx} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Reschedule <span className="font-semibold">{suggestion.event}</span> to{" "}
                    <span className="font-semibold text-accent">{suggestion.suggestedTime}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
