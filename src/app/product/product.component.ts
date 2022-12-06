import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service'
import { ActivatedRoute } from '@angular/router';



declare let alertify;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  products: Product[] = [];
  title = "Ürün Listesi"
  filterText = ""

  ngOnInit(): void {
    //component çalıştığında çalışır

    this.activatedRoute.params.subscribe(params => {

      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data.data;
      })
    });

  }


}
