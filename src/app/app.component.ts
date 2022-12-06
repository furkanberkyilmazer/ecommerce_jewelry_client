import { Component } from '@angular/core';
import { Basket } from './basket/basket';
import { AccountService } from './services/account.service';
import { BasketService } from './services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formModal2:any;
  constructor(
    private accountService:AccountService
   
    ){}

  
  title = 'shop';


  
  isLoggedin(){
   return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }
  
  isUser(){
    if(this.accountService.users.name==undefined)
    return null;

    return this.accountService.users.name +" "+ this.accountService.users.surname;
  }

  }

