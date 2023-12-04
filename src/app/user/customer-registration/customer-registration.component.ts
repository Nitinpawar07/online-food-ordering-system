import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { CustomerSignupService } from 'src/app/user/Customer-service/customer-signup.service';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {



  constructor(private customer: CustomerSignupService, private router: Router) {

  }

  issignup() {
    this.router.navigate(['customer-login']);
  }

  SignUp(data: object) {
    
    this.customer.setData(data).subscribe((status) => {
      console.warn(status);
      alert("successfully registered");
    });




  }

}
