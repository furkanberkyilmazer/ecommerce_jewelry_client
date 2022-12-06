import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { AlertifyService } from '../services/alertify.service'
import { CategoryService } from '../services/category.service'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  title = "Kategori Listesi"
  categories: Category[] = [];

  ngOnInit(): void {

    this.categoryService.getProducts().subscribe(data=>{
      this.categories = data.data;
      console.log(JSON.stringify(data));
      

 
  });

}

}
