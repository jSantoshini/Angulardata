import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from './Models/country';
import { Customer } from './Models/customer';
import { LineofBusiness } from './Models/lineofbusiness';
import { Product } from './Models/product';
import { ProductSubCategory } from './Models/productsubcategory';
import { User } from './Models/user';
import { usersecurity } from './Models/usersecurity';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
//   GetHttpHeaders() : HttpHeaders {
//     const headers = new HttpHeaders().set('Content-Type', 'application/json')
//     headers =  new HttpHeaders().set('Access-Control-Allow-Origin: *')
//     header();
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//     return headers;
// }
  url = environment.frameworkurl;


  user(model:User){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/User",model)
  }
  country(model:Country){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/Country",model)
  }

  customer(model:Customer){
   let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json');
   headers = headers.set('Accept', 'application/json');
  //  headers = headers.set('Access-Control-Allow-Origin: *'),'Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token')

    return this.http.post<Customer[]>(this.url+"/Customer",model,{ headers: headers })
  }
  business(model:LineofBusiness){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/LineofBusiness",model)
  }

  product(model:Product){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/Product",model)
  }
  subproduct(model:ProductSubCategory){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/Productsubcategory",model)
  }
  usersecurity(model:usersecurity){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    return this.http.post(this.url+"/usersecurity",model)
  }
}
