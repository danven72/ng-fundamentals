import {  Component,  Input  } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
      .thumbnail { min-height: 210px; }
      .pad-left {margin-left: 10px; } 
      .well div {color: #bbb} 
      .green { color: #003300 !important; } 
      .bold { font-weight: bold; }
      `
  ]
})
export class EventThumbnailComponent {
    @Input() event: any;
    
    getStartTimeClass() {
      const isEarly = this.event?.time==='8:00 am';
      return {green: isEarly, bold: isEarly};
    }

}
