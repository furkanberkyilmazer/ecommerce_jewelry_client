import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { LoginGuard2 } from './login/login2.guard';
import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './services/basket.service';
import { BasketCountComponent } from './basket-count/basket-count.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { ProductService } from './services/product.service';
import { OrdersProductComponent } from './order/orders-product/orders-product.component';
import { OrdersAddressComponent } from './order/orders-address/orders-address.component';
import { AddressComponent } from './address/address.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    LoginComponent,
    ProductdetailsComponent,
    BasketComponent,
    BasketCountComponent,
    SidebarComponent,
    OrderComponent,
    CreateOrderComponent,
    OrdersProductComponent,
    OrdersAddressComponent,
    AddressComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
   
  ],
  providers: [AlertifyService,AccountService,LoginGuard,LoginGuard2,BasketService,BasketCountComponent,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
