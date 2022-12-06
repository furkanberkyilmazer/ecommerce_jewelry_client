import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  path="https://localhost:7275/api/User/Login/"

  constructor(private http: HttpClient) { }
  
  loggedIn=false;
  //users: User[] = [];
  users: User = new User();
  login(user:User):Observable<any> {

    let newPath = this.path;    
    
       
    if (user) {
      newPath +=  user.username+"/"+user.password;
    }
    
   
     return this.http.get<any>(newPath).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)  
    ); 
    
    
  }

 
  isLoggedIn()
  {
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
    this.users=new User();
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
