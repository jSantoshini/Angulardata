import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CustomerComponent } from './customer/customer.component';

import { HeaderComponent } from './header/header.component';
import { LineofbusinessComponent } from './lineofbusiness/lineofbusiness.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductsubcategoryComponent } from './productsubcategory/productsubcategory.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { UserComponent } from './user/user.component';


// const routes: Routes = [
//   {
//     path:'dashboard',component:HeaderComponent,
//     children:[
//       {path:'user',component:UserComponent},
//       {path:'home',component:HomeComponent},
//       {path:'about',component:AboutComponent}


//     ]

//   },
//   {path:'login',component:LoginComponent},
//   {path:'*',redirectTo:'/login',pathMatch:'full'}
// ];

const appRoutes:Routes=[
  {
    path:'dashboard',component:HeaderComponent,
    children:[
      {path:'user',component:UserComponent},
      {path:'customer',component:CustomerComponent},
      {path:'lineofbusiness',component:LineofbusinessComponent},
      {path:'product',component:ProductComponent},
      {path:'productsubcategory',component:ProductsubcategoryComponent},
      {path:'country',component:CountryComponent},
      {path:'usersecurity',component:UserSecurityComponent}

    ]

  },
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
]

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
