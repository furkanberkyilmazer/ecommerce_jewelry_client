import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders-product',
  templateUrl: './orders-product.component.html',
  styleUrls: ['./orders-product.component.css']
})
export class OrdersProductComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private accountService:AccountService,
    ) { }
  
  product:Product=new Product;

  @Input() productId:number | undefined;
  ngOnInit(): void {
    this.productService.getById(this.productId).subscribe(data=>{
    
      this.product=data.data;
      
     })
  }
 
}
