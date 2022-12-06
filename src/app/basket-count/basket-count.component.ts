import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../basket/basket';
import { AccountService } from '../services/account.service';
import { BasketService } from '../services/basket.service';


@Component({
  selector: 'app-basket-count',
  templateUrl: './basket-count.component.html',
  styleUrls: ['./basket-count.component.css'],
  
})



export class BasketCountComponent implements OnInit {

    baskets: Basket[] = [];
   
     count=0;
  constructor(private basketService:BasketService,
    private accountService:AccountService,
    private route: Router ) { }
    

  ngOnInit(): void {
    
    
    this.basketCount()
    

  }


  basketCount()
  {
    if(this.accountService.users.name==undefined)
    {return null;}
    
    this.count=0;
    this.count=this.basketService.count;
    return this.count;
  }

}

