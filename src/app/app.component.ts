import { Component } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';

var height = window.innerHeight;
@Component({
  selector: 'app',
	styles: [ `
		.sebm-google-map-container {
			height: ${height}px;
		}
	` ],
  template: `
    <ng-sidebar-container>
      <ng-sidebar [(opened)]="opened">
        <p>Sidebar contents</p>
      </ng-sidebar>
    <button (click)="toggleSidebar()">Toggle sidebar</button>
    </ng-sidebar-container>

    <sebm-google-map [latitude]="lat" [styles]="mapstyle" [longitude]="lng">
      <sebm-google-map-marker [latitude]="markerlat" [longitude]="markerlng" [label]="'P'">
      </sebm-google-map-marker>
    </sebm-google-map>
	`
})
export class AppComponent {
  lat: number = 51.924420;
  lng: number = 4.477733;
  markerlat: number = 51.924420;
  markerlng: number = 5.517733;
  opened: boolean = false;
  toggleSidebar() {
    this.opened = !this.opened;
  }
  directives: [SebmGoogleMap, SebmGoogleMapMarker];
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
