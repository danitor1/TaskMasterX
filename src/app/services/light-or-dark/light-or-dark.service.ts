import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LightOrDarkService {
  private eventSubject = new Subject<void>();

  emitEvent() {
    this.eventSubject.next();
  }

  getEvent(): Observable<void> {
    return this.eventSubject.asObservable();
  }
}
