import { GameComponent } from './main/game/game.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:'game/:name',component:GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
