import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-choice',
  templateUrl: './comp-choice.component.html',
  styleUrls: ['./comp-choice.component.css']
})
export class CompChoiceComponent implements OnInit {
  @Input() choice;
  @Input() borderColor;

  constructor() { }

  ngOnInit(): void {
  }
  

}
