import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
playerName:string =""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  startGame(){
    if(this.playerName === ""){
      this.playerName = "Player"
    }
    this.router.navigate(["game",this.playerName])
  }
}
