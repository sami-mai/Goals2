import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals2';
  goal = "Watching Finding Nemo";
  goals:string[];

  constructor(){

    this.goals = ["Watching Black Panther", "Buy fruits", "Get a new heater"];
    
  }
}
