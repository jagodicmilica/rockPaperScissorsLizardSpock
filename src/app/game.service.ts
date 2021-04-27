import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  choice(ch){
    switch(ch){
        case "r":
            return "rock";
        case "p": 
            return "paper";
        case "s":
            return "scissors";
        case "l":
            return "lizard";
        case "sp":
            return "spock";
    }
  }

  compChoice():string{
    var randNum = Math.floor(Math.random()*5);
    const choices = ['r','p','s','l','sp'];
    return choices[randNum];
  }
  
  getWinner(user_choice,comp_choice):string{
    switch(user_choice+comp_choice){
        case "rs":
        case "pr":
        case "psp":
        case "sp":
        case "sl":
        case "lsp":
        case "lp":
        case "rl":
        case "sps":
        case "spr":
            return "u";
        case "sr":
        case "rp":
        case "spp":
        case "ps":
        case "ls":
        case "spl":
        case "pl":
        case "lr":
        case "ssp":
        case "rsp":
            return "c"

        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            return "draw"

    }
}
}
