import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
@Output() played:EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  play(value){
    this.played.emit(value)
    
  }
}
