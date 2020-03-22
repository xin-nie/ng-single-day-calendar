interface Window {
  layOutDay: (events: CalenderEvent[]) => void;
}

interface CalenderEvent {
  start: number;
  end: number;
}
