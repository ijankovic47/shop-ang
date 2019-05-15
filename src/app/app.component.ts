import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music Shop';
  id: number;
  service: MainService;

  constructor(service: MainService) {
    this.id = service.getData();
    this.service = service;
  }
 handle(message) {
   console.log(message);
 }
  getId() {
    this.id = this.service.getData();
  }
}
