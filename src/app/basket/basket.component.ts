import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product';
import { Basket } from './basket';
import { BasketContent } from './basketcontent';
import { AlertifyService } from '../services/alertify.service';
import { AccountService } from '../services/account.service';
import { NgForm } from '@angular/forms';
import { BasketCountComponent } from '../basket-count/basket-count.component';
import { AddressService } from '../services/address.service';
import { OrderService } from '../services/order.service';
import { Order } from '../order/order';

declare var window:any;

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [BasketService,ProductService]
})
export class BasketComponent implements OnInit {
  //static basketContents: any;
  
  formModal:any;
  formModal2:any;

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private accountService:AccountService,
    private basketService:BasketService,
    private basketCount:BasketCountComponent,
    private route: Router,
    private addressService:AddressService,
    private orderService:OrderService

  ) { }

  products: Product[] = [];
  
  baskets: Basket[] =[];
  totalPrice:number=0;
  basketContents:BasketContent[]=undefined||[];
  basket=new Basket();
  product=new Product();
  pieceArray:number[]=[];
  pieceValue=0;
  address:any[]=[];
  addressId=0;
  orders:Order[]=[];
  isDisabled=false;

  ngOnInit(): void {
   

    this.getBasket();
    
    this.formModal=new window.bootstrap.Modal(

      document.getElementById("exampleModal")
    );

    this.formModal2=new window.bootstrap.Modal(

      document.getElementById("orderModal")
    );
  }
  
  getBasket(){
    this.totalPrice=0;
    this.basketContents=[];
    this.isDisabled=false;
     this.basketService.getBasket(this.accountService.users.id).subscribe(data => {
      this.basketService.getBasketCount(this.accountService.users.id);
     console.log(this.basketService.count +"////////////////////////////////////");
      this.baskets = data.data;
     /* console.log(this.baskets); 
         console.log("--------");*/
          
         for(let i=0; i<this.baskets.length; i++)
         {
           
             this.productService.getById(this.baskets[i].productId).subscribe(data => {
                
               this.products[i]=data.data; 
               /*console.log(this.products[i]); 
               console.log("--------");*/
               this.basketContents[i]={basketId:this.baskets[i].id,productId:this.products[i].id,name:this.products[i].name,description:this.products[i].description,pcsprice:this.products[i].price,piece:this.baskets[i].piece,price:this.baskets[i].piece*this.products[i].price,imageUrl:this.products[i].imageUrl};
               this.totalPrice += this.baskets[i].piece*this.products[i].price;
              /* console.log(this.basketContents[i]);           
               console.log("--------");*/
              
               if(this.baskets[i].piece > this.products[i].stock)
               {
                this.basketContents[i].stockControl=false;

                this.isDisabled=true
                
               }

          /*
               console.log("{");
               console.log(this.basketService.count);
               this.basketService.getBasketCount(this.accountService.users.id);
               
               console.log(this.basketService.count);
               console.log("}");*/
               
             });
              
            
               
         }
        
         
         
    });


  
    
  }

  deleteBasket(basketId)
  {
    
     this.basketService.deleteBasket(basketId).subscribe(data=>{
       //this.route.navigate(['']);
     
       
        //this.getBasket();  



        this.totalPrice=0;
        this.basketContents=[];
        this.isDisabled=false;
       
         this.basketService.getBasket(this.accountService.users.id).subscribe(data => {
          this.basketService.getBasketCount(this.accountService.users.id);
         console.log(this.basketService.count +"////////////////////////////////////");
          this.baskets = data.data;
         /* console.log(this.baskets); 
             console.log("--------");*/
              
             for(let i=0; i<this.baskets.length; i++)
             {
               
                 this.productService.getById(this.baskets[i].productId).subscribe(data => {
                    
                   this.products[i]=data.data; 
                   /*console.log(this.products[i]); 
                   console.log("--------");*/
                   this.basketContents[i]={basketId:this.baskets[i].id,productId:this.products[i].id,name:this.products[i].name,description:this.products[i].description,pcsprice:this.products[i].price,piece:this.baskets[i].piece,price:this.baskets[i].piece*this.products[i].price,imageUrl:this.products[i].imageUrl};
              
                   this.totalPrice += this.baskets[i].piece*this.products[i].price;
                   if(this.baskets[i].piece > this.products[i].stock)
                   {
                    this.basketContents[i].stockControl=false;
                    this.isDisabled=true;
                   }

                  /* console.log(this.basketContents[i]);           
                   console.log("--------");*/
                  
                
                   
                 });
                  
                
                   
             }
            
             
             
        });
    



      
     });
  
    this.alertifyService.error("The product has been deleted");
   
 }
 
 openModal(basketId?:number,productId?:number){
  this.formModal.show();
  this.basketService.getBasketById(basketId).subscribe(data => {
    this.basket=data.data;

    this.productService.getById(this.basket.productId).subscribe(data=>{
        this.product=data.data;
        for(let i=0; i<this.product.stock; i++){
            this.pieceArray[i]=i+1;
        }
    })
  });
  
 }

 doSomething(){
  this.formModal.hide();
 }

 add()
 {
   
  this.basket.piece=this.pieceValue;
   this.basketService.updateBasket(this.basket).subscribe(data=>{
     this.alertifyService.success("Ürün başarıyla güncellendi.");
     this.doSomething();
     this.getBasket();

   });
 
 }

 openOrderModal(){
  this.formModal2.show();
  this.addressService.getAddresses(this.accountService.users.id).subscribe(data => {
      this.address=data.data;                                
 });
 
 }

 createOrder()
 {
   
  if(this.addressId==0)
  { 

    this.alertifyService.warning("Adres seçimi yapınız.");
  }
  else
  {
 
  
 console.log(this.addressId);
 for(let i=0; i<this.baskets.length; i++)
 {  
  this.orders[i]={productId:this.baskets[i].productId,createdDate:new Date(),userId:this.accountService.users.id,piece:this.baskets[i].piece,price:this.baskets[i].piece*this.products[i].price,addressId:this.addressId};
  this.orderService.addOrder(this.orders[i]).subscribe();
 }

 this.addressId=0;
 this.alertifyService.success("Sipariş oluşturuldu.");
 this.formModal2.hide();
 this.route.navigate(['']);

 
 

}
}



}