import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;

  // Emitting Events
  @Output()isComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  // remove the goalComplete function in our goal-details component class. We replace it with our new goalDelete` function.
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
