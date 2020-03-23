import { Component } from '@angular/core';

const TIMELINE_START = 0;
const TIMELINE_END = 720;
const TIMELINE_STEP = 30;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  timeSlots = this.buildTimeSlots();

  private buildTimeSlots() {
    return Array((TIMELINE_END - TIMELINE_START) / TIMELINE_STEP)
      .fill(TIMELINE_START)
      .map<number>((x, idx) => x + idx * TIMELINE_STEP);
  }
}
