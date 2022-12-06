import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Basket } from '../basket/basket';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ProductService } from './product.service';
import { AccountService } from './account.service';
import { BasketCountComponent } from '../basket-count/basket-count.component';

@Injectable({
  providedIn: 'root'
})
export class BasketService  {

  //count :number=0;
  count
  path = "https://localhost:7275/api/Basket/"
  constructor(
    private http: HttpClient,
    private accountService:AccountService,
  

    ) { }

    getBasket(userId): Observable<any> {

      let newPath = this.path+"GetSepets/";
      if (userId) {
        newPath += userId;
      }
      
     
      return this.http.get<any>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
      
    }
    getBasketCount(userId):number{

      let newPath = this.path+"GetSepets/";
      if (userId) {
        newPath += userId;
      }
       this.http.get<any>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      ).subscribe(
        data=>{
          this.count=data.data.length;
        }
      );
      return this.count;
      
    }
 
    getBasketById(basketId): Observable<any> {

      let newPath = this.path+basketId;
    
      return this.http.get<any>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
      
    }
    deleteBasket(basketId){

      let newPath = this.path;
      if (basketId) {
        newPath += basketId;
      }
      
     
      
    
      return this.http.delete<Basket[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
      
    }
    addBasket(basket:Basket): Observable<Basket> {
      let newPath = this.path+"AddSepet";
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':'Token'
        })
      }
      return this.http.post<Basket>(newPath,basket,httpOptions).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError));
      
    }
    updateBasket(basket:Basket): Observable<Basket> {
      let newPath = this.path;
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':'Token'
        })
      }
      return this.http.put<Basket>(newPath,basket,httpOptions).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError));
      
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
}
