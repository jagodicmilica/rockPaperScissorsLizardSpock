import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { GameComponent } from './main/game/game.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoicesComponent } from './main/game/choices/choices.component';
import { CompChoiceComponent } from './main/game/comp-choice/comp-choice.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    ChoicesComponent,
    CompChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
