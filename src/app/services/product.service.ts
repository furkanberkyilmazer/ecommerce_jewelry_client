import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class ProductService {

  path = "https://localhost:7275/api/Products"
  

  constructor(private http: HttpClient) { }

  getProducts(categoryId): Observable<any> {

    let newPath = this.path;
    if (categoryId) {
      newPath += "/GetProductByCategoryId/" + categoryId;
    }
    return this.http.get<any>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  getById(id): Observable<any> {

    let newPath = this.path;
    if (id) {
      newPath += "/" + id;
    }
    return this.http.get<any>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }


  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.error.message
    }
    else {
      errorMessage = 'Sistemsel bir hata oluştu'
    }
    return throwError(errorMessage);
  }

  addProducts(product:Product): Observable<Product> {

    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
    
  }
}
