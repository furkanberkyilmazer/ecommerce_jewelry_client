/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css']
})
export class ProductAddForms2Component implements OnInit {

  constructor
  (
    private formBuilder:FormBuilder
  ) { }

  productAddForm = new FormGroup({
    name: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
    imageUrl: new FormControl("",Validators.required),
    price: new FormControl("",Validators.required),
    categoryId:new FormControl("",Validators.required),

  });

//  productAddForm : FormGroup;
  product:Product=new Product();
 
  createproductAddForm()
  {

   console.log (this.productAddForm.value)
     
  }
  ngOnInit(): void {
  }

  add(){
    if(this.productAddForm.valid)
    {
        this.product=Object.assign({},this.productAddForm.value)

    }

  }

}
*/