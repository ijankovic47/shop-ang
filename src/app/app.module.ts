import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main';
import { MainService } from './main.service';
import { EventsListComponent } from './events/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
