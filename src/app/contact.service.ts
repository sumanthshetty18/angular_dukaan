import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({ providedIn: 'root' })

export class ContactService {

  constructor() { }
  
  con: Contact[] = [{
    name: "Rakesh Sharma",
    emailid: "rakesh.sharma@dukaan.com",
    number: 9273920332,
    post: "Senior HR, Chandigarh"
  },
  {
    name: "Skanda Reddy",
    emailid: "skanda.reddy@dukaan.com",
    number: 8679806574,
    post: "Senior HR, Bangalore"
  }];

  public getContactDetails(): any {
    const conObservable = new Observable(observe => {
      setTimeout(() => { observe.next(this.con); }, 1000);
    });
    return conObservable;
  }
}