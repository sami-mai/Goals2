import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
