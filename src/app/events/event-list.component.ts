import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-events-list',
    template: 'hello <button (click)="onclick()">Click Meeeee</button>'
})
export class EventsListComponent {

    @Input() id: any;
    @Output() out = new EventEmitter();

    onclick() {
        console.log('CLICKED');
        this.out.emit('Heeeeeey !');
    }

}
