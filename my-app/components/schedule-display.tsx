"use client"

import type { Event } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Trash2 } from "lucide-react"

interface ScheduleDisplayProps {
  events: Event[]
  onDeleteEvent: (id: string) => void
}

export default function ScheduleDisplay({ events, onDeleteEvent }: ScheduleDisplayProps) {
  if (events.length === 0) {
    return (
      <Card className="p-12 text-center border-2 border-dashed border-border bg-muted/50">
        <div className="flex flex-col items-center gap-3">
          <Clock className="w-12 h-12 text-muted-foreground/40" />
          <p className="text-muted-foreground text-lg">No events scheduled yet</p>
          <p className="text-sm text-muted-foreground">Add an event to get started</p>
        </div>
      </Card>
    )
  }

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 px-6 py-5 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground">Your Schedule</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {events.length} event{events.length !== 1 ? "s" : ""} today
        </p>
      </div>

      <div className="divide-y divide-border">
        {events.map((event, index) => (
          <div key={event.id} className="p-6 hover:bg-muted/50 transition-colors duration-200 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>

                <div className="ml-11 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{event.startTime}</span>
                    <span className="text-muted-foreground/50">→</span>
                    <span className="font-medium">{event.endTime}</span>
                  </div>
                  {event.description && <p className="text-sm text-muted-foreground italic">{event.description}</p>}
                </div>
              </div>

              <Button
                onClick={() => onDeleteEvent(event.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
