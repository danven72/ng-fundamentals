import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './nav/routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
@NgModule({

    //In this section you add other modules usess to all app
    imports: [  
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    //In this section you add: component, pipe, directive
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    //In this section you add: services
    providers: [EventService, ToastrService, EventRouteActivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
