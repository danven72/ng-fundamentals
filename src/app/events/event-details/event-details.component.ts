import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../shared/event.service';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

        event: any;

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        //thiis the way how route gets parameters from url
        this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']));
    }

}
