import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private profileSource = new BehaviorSubject({});
  currentProfile = this.profileSource.asObservable();
  constructor() { }
  changeMessage(profile){
    this.profileSource.next(profile)
  }
}
