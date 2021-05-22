import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'

})
export class EventsListComponent  {

  title = "Upcoming Angular Events";

  eventObj = {
    id: 1,
    name: 'Angular Connect',
    date: '05/04/2021',
    price: 123.34,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Via Mattie 6',
      city: 'Torino',
      country: 'Italy'
    }
  }

  

}
