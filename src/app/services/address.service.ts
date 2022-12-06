import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  path = "https://localhost:7275/api/Address/"
  constructor(

    private http: HttpClient,
    private accountService:AccountService,
  ) { }
  getAddresses(userId): Observable<any> {

    let newPath = this.path+"GetAddresses/";
    if (userId) {
      newPath += userId;
    }
    return this.http.get<any>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }
  getAddressesById(addressId): Observable<any> {

    let newPath = this.path;
    if (addressId) {
      newPath += addressId;
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
}
