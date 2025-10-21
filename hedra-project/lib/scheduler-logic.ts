import type { Event, Conflict } from "./types"

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`
}

export function detectConflicts(events: Event[]): Conflict[] {
  const conflicts: Conflict[] = []

  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      const event1 = events[i]
      const event2 = events[j]

      const start1 = timeToMinutes(event1.startTime)
      const end1 = timeToMinutes(event1.endTime)
      const start2 = timeToMinutes(event2.startTime)
      const end2 = timeToMinutes(event2.endTime)

      // Check if events overlap
      if (start1 < end2 && start2 < end1) {
        conflicts.push({
          event1: event1.title,
          event2: event2.title,
        })
      }
    }
  }

  return conflicts
}

export function suggestAlternativeSlots(
  events: Event[],
  conflicts: Conflict[],
): { event: string; suggestedTime: string }[] {
  const suggestions: { event: string; suggestedTime: string }[] = []
  const workingHoursStart = 8 * 60 // 08:00
  const workingHoursEnd = 18 * 60 // 18:00

  conflicts.forEach((conflict) => {
    const conflictingEvent = events.find((e) => e.title === conflict.event2)
    if (!conflictingEvent) return

    const eventDuration = timeToMinutes(conflictingEvent.endTime) - timeToMinutes(conflictingEvent.startTime)

    // Find first available slot
    let currentTime = workingHoursStart
    let found = false

    while (currentTime + eventDuration <= workingHoursEnd && !found) {
      const isSlotFree = events.every((event) => {
        if (event.id === conflictingEvent.id) return true

        const eventStart = timeToMinutes(event.startTime)
        const eventEnd = timeToMinutes(event.endTime)

        return currentTime >= eventEnd || currentTime + eventDuration <= eventStart
      })

      if (isSlotFree) {
        suggestions.push({
          event: conflictingEvent.title,
          suggestedTime: `${minutesToTime(currentTime)} - ${minutesToTime(currentTime + eventDuration)}`,
        })
        found = true
      }

      currentTime += 30 // Check every 30 minutes
    }
  })

  return suggestions
}
