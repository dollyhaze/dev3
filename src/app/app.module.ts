import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {EventModalComponent} from './eventModal/eventModal.component';
import { ConfirmComponent } from './confirmComponent/confirm.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import './graphs/Chart.min.js';
@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    ChartsModule,
    BrowserModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCY6otWv1cmM1xjbHFRFd03pWOCbwT-SFk '}),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    EventModalComponent,
    ConfirmComponent
  ],
  declarations: [ AppComponent, EventModalComponent, ConfirmComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
