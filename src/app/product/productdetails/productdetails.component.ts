import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BasketCountComponent } from 'src/app/basket-count/basket-count.component';
import { Basket } from 'src/app/basket/basket';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  providers: [ProductService]
})
export class ProductdetailsComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private accountService:AccountService,
    private basketService:BasketService,
    private basketCount:BasketCountComponent,
    private route: Router) { }

    //products: Product[] = [];
    products= new Product();
    basket;
    baskets: Basket[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.productService.getById(params["id"]).subscribe(data => {
        this.products = data.data;
        console.log(this.products);
      })
    });
  }
  addToCart(product) {
    if(this.isLoggedin())
    {
      this.basket={userId:this.accountService.users.id,productId:this.products.id,piece:1};     
      console.log(this.basket); 
      this.basketService.addBasket(this.basket).subscribe(data =>{
           
        this.basketService.getBasketCount(this.accountService.users.id);
          
         });
      this.alertifyService.success(product.name + " added");
      
      

        

    }
    else{

      this.route.navigate(['/login']);
    }
   
  }
  isLoggedin(){
    return this.accountService.isLoggedIn();
   }

 
  }



