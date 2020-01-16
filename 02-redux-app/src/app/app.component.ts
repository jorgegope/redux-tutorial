import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'redux-app';

    protected counter: number;

    constructor() {
        this.counter = 10;
    }

    increase() {
        this.counter++;
    }

    decrease() {
        this.counter--;
    }

    onCounterChanged(counter: number) {
        this.counter = counter;
    }
}
