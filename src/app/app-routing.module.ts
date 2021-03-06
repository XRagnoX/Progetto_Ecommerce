import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "productsList", component:ProductsListComponent },
  { path: "productPage", component:ProductPageComponent },
  { path: "register", component:RegisterComponent },
  { path: "login", component:LoginComponent },
  { path: "payment", component:PaymentMethodsComponent },
  { path: "recovery", component:PasswordRecoveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
