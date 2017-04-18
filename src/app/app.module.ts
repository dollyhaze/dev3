import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {EventModalComponent} from './eventModal/eventModal.component';
@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCY6otWv1cmM1xjbHFRFd03pWOCbwT-SFk '}),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    EventModalComponent
  ],
  declarations: [ AppComponent, EventModalComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
