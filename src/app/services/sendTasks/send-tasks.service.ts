import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendTasksService {
  // Subject from Rxjs
  private eventSubject = new Subject<void>();

  constructor() {}

  // Emit Event
  emitEvent() {
    this.eventSubject.next();
  }

  // Get Event
  getEvent() {
    return this.eventSubject.asObservable();
  }
}
