import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MasterComponent } from './master/master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  declarations: [

    HomeComponent,
     LoginComponent,
     RegisterComponent,
     PaymentMethodsComponent,
     CartComponent,
     ProductsListComponent,
     ProductPageComponent,
     MasterComponent,
     PasswordRecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
