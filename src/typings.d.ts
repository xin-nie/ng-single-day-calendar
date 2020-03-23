interface Window {
  layOutDay: (events: CalendarEvent[]) => void;
}

interface CalendarEvent {
  start: number;
  end: number;
}
