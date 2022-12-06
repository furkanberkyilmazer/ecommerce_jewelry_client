import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { BasketService } from '../services/basket.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUsers: User[] = [];
  model:User=new User();
  constructor(private accountService:AccountService,
    private basketService:BasketService,
    private route: Router ) { }

  ngOnInit(): void {
  }
  
  login(form:NgForm){
    this.accountService.login(this.model).subscribe((data => {
      this.loginUsers = data.data;
      console.log(this.loginUsers);
      
     if(this.loginUsers)
     {
      
       this.accountService.loggedIn=true;
       this.accountService.users=data.data;
       console.log(this.accountService.users.name)
       
       this.route.navigate(['']);
       this.basketService.getBasketCount(this.accountService.users.id);
     }
     else
     {
       this.accountService.loggedIn=false;
     }
     
    }));
 
  }

 
}

