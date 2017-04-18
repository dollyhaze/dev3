import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {EventService} from './events.service';
import {EventModalComponent} from './eventModal/eventModal.component';
import { DialogService } from "ng2-bootstrap-modal";

var height = window.innerHeight;
@Component({
  selector: 'app',
	styles: [ `
		.sebm-google-map-container {
			height: ${height}px;
		}
	` ],
  providers:[EventService],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  lat: number = 51.924420;
  lng: number = 4.477733;
  zoomlvl: number = 14;
  markerlat: number = 51.924420;
  markerlng: number = 5.517733;
  opened: boolean = false;
  events = [];
  parkings = [];
  constructor(private eventService: EventService, private dialogService:DialogService) {}

  ngOnInit() {
    this.getEvents()
    this.getParkings()
  }
  private convertToNumber(value: string): number {
    return +value
  }
  getEvents() {
    this.eventService.getEvents()
      .subscribe(
        event => this.events = event.events,
        console.log
      )
  }
  getParkings() {
    this.eventService.getParkings()
      .subscribe(
        parking => {
          this.parkings = parking.parkings
        },
        console.log
      )
  }

  showEvent(event) {
    this.dialogService.addDialog(EventModalComponent, event)
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
