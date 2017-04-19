import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { EventService } from './events.service';
import { EventModalComponent } from './eventModal/eventModal.component';
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

  getClosestParking(event, parkings) {
    var minD = Number.MAX_SAFE_INTEGER;
    var closestD;
    var closestParking;
    for (let parking of parkings) {
      var p = Math.PI / 180
      var c = Math.cos;
      var a = 0.5 - c((parking.latitude - event.latitude) * p)/2 +
              c(event.latitude * p) * c(parking.latitude * p) *
              (1 - c((parking.longitude - event.longitude) * p))/2;

      var d = 12742 * Math.asin(Math.sqrt(a));

      if(d < minD){
        closestD = d;
        closestParking = parking;
        minD = d;
      }
    }

    console.log(closestD);
    console.log(closestParking.name);
    return closestParking.name;

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
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

/*
getDistance(event, parking) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(parking.latitude-event.latitude);  // deg2rad below
  var dLon = deg2rad(parking.longitude-event.longitude);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(event.longitude)) * Math.cos(deg2rad(parking.longitude)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}
*/
