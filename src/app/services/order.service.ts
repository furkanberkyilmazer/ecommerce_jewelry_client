import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Order } from '../order/order';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  path = "https://localhost:7275/api/Orders/"

  constructor(
    private http: HttpClient,
    private accountService:AccountService,
    
  ) { }
  getOrders(userId): Observable<any> {

    let newPath = this.path+"GetOrders/";
    if (userId) {
      newPath += userId;
    }
    
   
    return this.http.get<any>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }
  addOrder(order:Order): Observable<Order> {
    let newPath = this.path;
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Order>(newPath,order,httpOptions).pipe(
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
