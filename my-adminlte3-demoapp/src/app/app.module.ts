import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { CountryService } from './services/country.service';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
//import { ReviewUserComponent } from './review-user/review-user.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { LineofbusinessComponent } from './lineofbusiness/lineofbusiness.component';
import { ProductComponent } from './product/product.component';
import { ProductsubcategoryComponent } from './productsubcategory/productsubcategory.component';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserSecurityComponent } from './user-security/user-security.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';




// const appRoutes:Routes=[
//   {
//     path:'dashboard',component:HeaderComponent,
//     children:[
//       {path:'home',component:HomeComponent},
//       {path:'about',component:AboutComponent},

//     ]

//   },
//   {path:'login',component:LoginComponent},
//   {path:'*',redirectTo:'/login',pathMatch:'full'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    CustomerComponent,
    LineofbusinessComponent,
    ProductComponent,
    ProductsubcategoryComponent,
    CountryComponent,
    UserSecurityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule
    // ,RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
