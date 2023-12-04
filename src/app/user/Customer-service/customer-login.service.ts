import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  private baseUrl="http://localhost:8080/user";

  constructor(private http:HttpClient) { }

  customerLogin(customerCred:any):Observable<object> 
  {
    return this.http.post(`${this.baseUrl}/login`,customerCred);
  }
}
