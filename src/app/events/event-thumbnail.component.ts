import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector:"event-thumbnail",
    templateUrl:'./event-thumbnail.component.html',
   styles:[".green {color:green;}",".bold{'font-weight':bold}"]
})
export class EventThumbnailComponent{
  @Input() event:any
  getStartTimeClass(){
      if(this.event.time=='8:00 am'){
          return ["green","bold"]
      }
      return ""
  }
  getStartTimeStyle(){
    if(this.event.time=='8:00 am'){
        return {color:"red","font-weight":"bold"}
    }
    return {}
}
}