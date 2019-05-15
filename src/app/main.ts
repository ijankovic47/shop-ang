import { Point } from './Point';
import { Component } from '@angular/core';
import { MainService } from './main.service';

function print(mess: any) {
    console.log(mess);
}
let message = 'Zdravo Ivke !';

print(message);

enum Color {
    Red = 0, Blue = 1
}

let log = (point: Point) => console.log(point.x * point.y);

let point = new Point();
point.draw();

@Component({
    selector: 'main',
    template: '<h1>Hello from main component ! {{ id }}</h1>'
})
export class MainComponent {

    id: number;

    constructor(service: MainService) {
        this.id = service.getData();
    }
}
