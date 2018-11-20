import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './events-app.component';
import{EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './common/navbar/nav-bar.component';
import{EventDataService} from './common/services/eventDataService';

@NgModule({
  declarations: [
    NavbarComponent,
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[EventDataService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
