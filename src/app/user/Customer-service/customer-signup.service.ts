import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerSignupService {
  customerdata:any;
/*   GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode */

constructor(private http:HttpClient) { } 

setData(data:any){
  this.customerdata=data;
  return this.http.post("http://localhost:8080/user/",this.customerdata);
  //console.warn(this.customerdata);
}

 
  
}
