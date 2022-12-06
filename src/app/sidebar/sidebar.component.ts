import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private accountService:AccountService,
    private basketService:BasketService) { }

  ngOnInit(): void {
    
  }

  isUser()
  {
    if(this.accountService.users.name==undefined)
    return null;

    return this.accountService.users.name +" "+ this.accountService.users.surname;
  }
  
  basketCount()
  {
    if(this.accountService.users.name==undefined)
    return null;

    return this.basketService.count;
  }

}
