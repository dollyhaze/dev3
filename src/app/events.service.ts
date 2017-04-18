import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class EventService {

  constructor(private http: Http) {}

  getParkings() {
    return this.http.get('http://localhost:4000/parkings')
      .map(res => res.json())
  }

  getEvents() {
    return this.http.get('http://localhost:4000/events')
      .map(res => res.json())
  }
}
