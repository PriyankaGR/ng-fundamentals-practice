import { Component,OnInit } from "@angular/core";
import {EventDataService} from './../common/services/eventDataService';

@Component({
selector:"events-list",
templateUrl:'./events-list.component.html'
})
export class EventsListComponent implements OnInit{
events:any=[];

constructor(private eventService:EventDataService){

}

ngOnInit(){
    this.events=this.eventService.getEvents();
}

}