import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import the goal class
import {Goal} from '../goal';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
// create a newGoal property in our GoalFormComponentclass
  newGoal=new Goal(0,"","",new Date());
// create a new event emitter object addGoal which is of type Goal
  @Output() addGoal=new EventEmitter<Goal>();
// create the submitGoal function where we call the emit method and pass in the newGoal property
      submitGoal(){
          this.addGoal.emit(this.newGoal);
      }

  constructor() { }

  ngOnInit() {
  }

}
