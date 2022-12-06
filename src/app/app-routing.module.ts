import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { AddressComponent } from './address/address.component';
import { LoginGuard2 } from './login/login2.guard';

const routes: Routes = [
    {path:'products',component: ProductComponent},
    {path:'product-add-1',component: ProductAddForms1Component,canActivate:[LoginGuard]},    
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products/category/:categoryId',component:ProductComponent},
    {path:'login',component:LoginComponent},
    {path:'products/productdetails/:id',component:ProductdetailsComponent},
    {path:'products/category/:categoryId/productdetails/:id',component:ProductdetailsComponent},
    {path:'basket',component:BasketComponent,canActivate:[LoginGuard2]},
    {path:'order',component:OrderComponent,canActivate:[LoginGuard2]},
    {path:'create-order',component:CreateOrderComponent},
    {path:'address',component:AddressComponent,canActivate:[LoginGuard2]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
