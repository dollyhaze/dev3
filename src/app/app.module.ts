import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
@NgModule({
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCY6otWv1cmM1xjbHFRFd03pWOCbwT-SFk '}),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
