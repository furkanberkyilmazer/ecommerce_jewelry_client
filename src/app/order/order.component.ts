import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BasketCountComponent } from '../basket-count/basket-count.component';
import { Product } from '../product/product';
import { AccountService } from '../services/account.service';
import { AddressService } from '../services/address.service';
import { AlertifyService } from '../services/alertify.service';
import { BasketService } from '../services/basket.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { Order } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
 
})
export class OrderComponent implements OnInit {

  constructor(

    private accountService:AccountService,
    private route: Router,
    private orderService:OrderService,
    private productService:ProductService,

    
  ) { }

  
 
  
  orders: Order[]  =[];

  ngOnInit(): void {
    
   
    this.getOrder();
  
    
  }
  getOrder(){
   
 
    
   
     this.orderService.getOrders(this.accountService.users.id).subscribe(data => {
        this.orders=data.data;
     
    });
      

  }
  


}
