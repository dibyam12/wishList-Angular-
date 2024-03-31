import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' }) //other components can use this class
export class EventService {
  private subject = new Subject();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload }); // emit vaye sakey pachi subject ko next method call huncha
    //tespachi tyo event ley subject lai observable method bata use garera subscribe method lai access diyencha.
  }
  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}
