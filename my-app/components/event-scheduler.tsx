"use client"

import React from "react"

import { useState } from "react"
import EventForm from "./event-form"
import ScheduleDisplay from "./schedule-display"
import ConflictAlert from "./conflict-alert"
import type { Event, Conflict } from "@/lib/types"
import { detectConflicts, suggestAlternativeSlots } from "@/lib/scheduler-logic"

export default function EventScheduler() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Meeting A",
      startTime: "09:00",
      endTime: "10:30",
      description: "Team sync meeting",
    },
    {
      id: "2",
      title: "Workshop B",
      startTime: "10:00",
      endTime: "11:30",
      description: "Professional development workshop",
    },
    {
      id: "3",
      title: "Lunch Break",
      startTime: "12:00",
      endTime: "13:00",
      description: "Lunch time",
    },
    {
      id: "4",
      title: "Presentation C",
      startTime: "10:30",
      endTime: "12:00",
      description: "Project presentation",
    },
  ])
  const [conflicts, setConflicts] = useState<Conflict[]>([])

  React.useEffect(() => {
    const detectedConflicts = detectConflicts(events)
    setConflicts(detectedConflicts)
  }, [])

  const handleAddEvent = (newEvent: Event) => {
    const updatedEvents = [...events, newEvent]
    setEvents(updatedEvents)

    // Detect conflicts
    const detectedConflicts = detectConflicts(updatedEvents)
    setConflicts(detectedConflicts)
  }

  const handleDeleteEvent = (id: string) => {
    const updatedEvents = events.filter((e) => e.id !== id)
    setEvents(updatedEvents)

    const detectedConflicts = detectConflicts(updatedEvents)
    setConflicts(detectedConflicts)
  }

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = Number.parseInt(a.startTime.replace(":", ""))
    const timeB = Number.parseInt(b.startTime.replace(":", ""))
    return timeA - timeB
  })

  const suggestions = suggestAlternativeSlots(events, conflicts)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <EventForm onAddEvent={handleAddEvent} />
        </div>

        <div className="lg:col-span-3 space-y-6">
          {conflicts.length > 0 && <ConflictAlert conflicts={conflicts} suggestions={suggestions} />}

          <ScheduleDisplay events={sortedEvents} onDeleteEvent={handleDeleteEvent} />
        </div>
      </div>
    </div>
  )
}
