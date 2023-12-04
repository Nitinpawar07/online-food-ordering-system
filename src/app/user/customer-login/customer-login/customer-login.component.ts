import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginService } from '../../Customer-service/customer-login.service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

 // private loginStatus=false;

  constructor(private router:Router,private customerService:CustomerLoginService){
    localStorage.clear;
  }


  customerlog(logindata:any){

    let response = this.customerService.customerLogin(logindata).subscribe((data)=>{
     // console.warn(data);
      alert("successfull login");
      localStorage.setItem("name",`${logindata.email}`);
      localStorage.setItem("loginStatus","true");
      //this.router.navigate(['/']);
      window.location.href="/";
      //console.warn(logindata.email);
      
      
    },(error)=>{
      console.warn(error);
      alert("incorrect login Credential");
      
    }
    );

  }
  
  islogin(){
    this.router.navigate(["customer-registration"]);

  }
}
