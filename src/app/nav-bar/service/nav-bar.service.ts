import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  title: BehaviorSubject<string>;
  constructor() {
    this.title = new BehaviorSubject('MovieNight');
  }
}
