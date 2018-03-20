import { Component } from '@angular/core';
// import Goal class here
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals2';
  // goal = "Watching Finding Nemo";
  // goals:string[];

// Change array of Goals
  goals = [
        new Goal(1,'Watch Finding Nemo'),
        new Goal(2,'Buy Cookies'),
        new Goal(3, 'Get new Phone Case'),
        new Goal(4, 'Get Dog Food'),
        new Goal(5, 'Solve math homework'),
        new Goal(6, 'Plot my world domination plan'),

    ]

  constructor(){

    // this.goals = ["Watching Black Panther", "Buy fruits", "Get a new heater"];

  }
}
