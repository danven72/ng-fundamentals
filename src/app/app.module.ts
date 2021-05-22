import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
@NgModule({
  
  //In this section you add other modules usess to all app
  imports: [
  
  BrowserModule
  ],
  //In this section you add: component, pipe, directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  
  //In this section you add: services
  //providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
