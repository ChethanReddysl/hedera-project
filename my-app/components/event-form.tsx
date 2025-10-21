"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Event } from "@/lib/types"
import { Calendar, Clock, FileText, Plus } from "lucide-react"

interface EventFormProps {
  onAddEvent: (event: Event) => void
}

export default function EventForm({ onAddEvent }: EventFormProps) {
  const [title, setTitle] = useState("")
  const [startTime, setStartTime] = useState("09:00")
  const [endTime, setEndTime] = useState("10:00")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      alert("Please enter an event title")
      return
    }

    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      startTime,
      endTime,
      description,
    }

    onAddEvent(newEvent)

    // Reset form
    setTitle("")
    setStartTime("09:00")
    setEndTime("10:00")
    setDescription("")
  }

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6 sticky top-8 backdrop-blur-sm bg-card/95">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Add Event</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Event Title</label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Team Meeting"
            className="w-full bg-input border-border focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              Start Time
            </label>
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full bg-input border-border focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              End Time
            </label>
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full bg-input border-border focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-secondary" />
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add event details..."
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input"
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </form>
    </div>
  )
}
