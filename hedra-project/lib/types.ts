export interface Event {
  id: string
  title: string
  startTime: string
  endTime: string
  description?: string
}

export interface Conflict {
  event1: string
  event2: string
}
