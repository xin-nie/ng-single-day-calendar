interface Window {
  layOutDay: (events: CalendarEvent[]) => void;
}

interface CalendarEvent {
  start: number;
  end: number;
}

interface EventLayout {
  height: string;
  left: string;
  top: string;
  width: string;
}
