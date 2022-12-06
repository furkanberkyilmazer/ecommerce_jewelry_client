import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Category } from '../category/category';
import { Observable,throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';


@Injectable()
export class CategoryService {

  path="https://localhost:7275/api/Categories"

 
  constructor( private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  handleError(err: HttpErrorResponse)  {
    let errorMessage=''
    if(err.error instanceof ErrorEvent)
    {
        errorMessage = 'Bir hata oluştu'+ err.error.message
    }
    else{
      errorMessage='Sistemsel bir hata oluştu'
    }
    return throwError(errorMessage);
  }
}
