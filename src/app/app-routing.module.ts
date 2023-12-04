import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerRegistrationComponent } from './user/customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './user/customer-login/customer-login/customer-login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"customer-registration",
    component:CustomerRegistrationComponent
  },
  {
    path:"customer-login",
    component:CustomerLoginComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
