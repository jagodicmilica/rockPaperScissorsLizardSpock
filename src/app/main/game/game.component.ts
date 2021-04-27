import { GameService } from './../../game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  winner;
  userName;
 
  winnerMsg="Let's play"
  compChoice="";
  userChoice="";
  compColor;
  userColor;
  userScore = 0;
  compScore = 0;

  constructor(private router:Router,private route:ActivatedRoute, private service:GameService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        this.userName = params['name']
      }
    )
  }
  userPlayed(user){
    var comp = this.service.compChoice();
    this.winner=this.service.getWinner(user,comp);
    
    this.compChoice = this.service.choice(comp);
    this.userChoice = this.service.choice(user);
    
    
    if(this.winner === "u"){
      this.userScore++;
      this.winnerMsg = "You win!"
      this.userColor = 'green';
      this.compColor = 'red';
    }else if(this.winner=== "c"){
      this.winnerMsg = "You lost."
      this.compScore++;
      this.userColor = 'red';
      this.compColor = 'green';
      
    }else if(this.winner === "draw"){
      this.winnerMsg = "It's a draw."
      this.userColor = 'grey';
      this.compColor = 'grey';
    }
  }

  endGame(){
    this.router.navigate(['welcome'])
  }
  resetScore(){
    this.userScore = 0;
    this.compScore = 0;
    this.compChoice = this.service.choice("");
    this.userChoice = this.service.choice("");
    this.userColor = '';
    this.compColor = '';
    this.winnerMsg="Lets play"
  }
}
