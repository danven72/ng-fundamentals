import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent  {

  eventsList = [
  {
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
},
{
  id: 2,
  name: 'Javascript Connect',
  date: '05/05/2021',
  price: 133.34,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: 'Via Garibaldi 6',
    city: 'Milano',
    country: 'Italy'
  }
},
{
  id: 3,
  name: 'CSS Connect',
  date: '05/06/2021',
  price: 123.00,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: 'Via Roma 8',
    city: 'Genova',
    country: 'Italy'
  }
}
]
  
buttonClickedList = [];   

   handleEventClicked(data) {
     this.buttonClickedList.push(data);
   }

   listShowable() {
    return this.buttonClickedList.length > 0;
   }

   remove(index) {
     this.buttonClickedList.splice(index, 1);
   }
}
