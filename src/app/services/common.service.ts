import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private is_loggedIn: boolean;

  constructor(private http: HttpClient) { }

  setLoginStatus(status: boolean){
    this.is_loggedIn = status;
  }

  getLoginStatus(){
    return this.is_loggedIn;
  }
  

  getUserData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserNamesOnly(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map((res:any) => res.map((rs:any) => rs.name)))
  }
}
