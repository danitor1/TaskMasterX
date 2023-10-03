import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { taskObject } from 'src/app/interfaces/taskObject';

@Injectable({
  providedIn: 'root',
})
export class SendTasksService {
  // Subject from Rxjs
  private eventSubject = new Subject<taskObject>();

  information!:taskObject;

  constructor() {}

  // Emit Event
  emitEvent(information:taskObject) {
    this.information = information;
    this.eventSubject.next(information);
  }

  // Get Event
  getEvent() {
    return this.eventSubject.asObservable();
  }
}
