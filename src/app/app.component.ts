import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';
var height = window.innerHeight;
@Component({
  selector: 'app',
	styles: [ `
		.sebm-google-map-container {
			height: ${height}px;
		}
	` ],
  template: `
    <sebm-google-map [zoom]="zoomlvl" [latitude]="lat" [styles]="mapstyle" [longitude]="lng">
      <sebm-google-map-marker
      *ngFor="let event of events"
      iconUrl="assets/img/marker-images/image.png"
      [latitude]="convertToNumber(event.latitude)"
      [longitude]="convertToNumber(event.longitude)"
      [label]="'P'"
      >
      <sebm-google-map-info-window [disableAutoPan]="true">
         {{event.title}}<br>
         <b>meer info...</b>
       </sebm-google-map-info-window>
      </sebm-google-map-marker>
    </sebm-google-map>
	`
})
export class AppComponent implements OnInit {
  lat: number = 51.924420;
  lng: number = 4.477733;
  zoomlvl: number = 14;
  markerlat: number = 51.924420;
  markerlng: number = 5.517733;
  opened: boolean = false;
  events = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getEvents()
  }
  private convertToNumber(value: string): number {
    return +value
  }
  getEvents() {
    this.http.get('http://localhost:4000/events')
      .map(res => res.json())
      .subscribe(event => {
        this.events = event.events
      }, console.log)
  }
  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow];
  mapstyle = [{
    "stylers": [{
        "hue": "#ff1a00"
    }, {
        "invert_lightness": true
    }, {
        "saturation": -100
    }, {
        "lightness": 33
    }, {
        "gamma": 0.5
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2D333C"
    }]
}]
}
