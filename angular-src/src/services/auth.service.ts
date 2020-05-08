import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    //let headers = new Headers();
    //headers.append('Content-type','application/json');
    //return this.http.post('http://localhost:3000/users/register', user,{ headers: Headers}.map(res => res.json()));
  }
}
