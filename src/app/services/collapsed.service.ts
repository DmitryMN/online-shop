import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapsedService {

  isCollapsed$ = new BehaviorSubject<boolean>(true)

  constructor() { }

  isCollapsedChange() {
    this.isCollapsed$.next(!this.isCollapsed$.getValue())
  }

}
