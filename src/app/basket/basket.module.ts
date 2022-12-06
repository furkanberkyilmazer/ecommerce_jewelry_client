import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
//import { BasketProductsComponent } from './basket-products/basket-products.component';



@NgModule({
  declarations: [
    BasketComponent,
    //BasketProductsComponent
  ],
  imports: [
    CommonModule,
    //BasketProductsComponent
  ]
})
export class BasketModule { }
