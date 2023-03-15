import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map, Observable, of, Subject } from 'rxjs';
import { GetToken } from '../token';
import { TokenService } from './token.service';
// import {GetToken } from 'src/app/token'
@Injectable({
  providedIn: 'root'
})
export class CountryService {
access_token: any;
  constructor(public http: HttpClient,private tokenserv: TokenService) {
    
   }

 GetAllCountries() {
  let token;
 this.tokenserv.GetToken().subscribe({
    next: (response:any) => {
      console.log(JSON.stringify(response.access_token));
      // console.log(Object.values(response)[0]);
      this.access_token=response;  
      token=response.access_token ;
      console.log(token);
      localStorage.setItem('token',token);
    // return (JSON.stringify(response.access_token));
    },
    error: (error:any) => console.log(error),
  }
  
  );
 
  let headers = new HttpHeaders();
  
  this.access_token=localStorage.getItem("token");

  const url: string = "https://dev-crowdapi.azurewebsites.net/api/user/Countries";
  headers = headers.set('Content-Type', 'application/json');
  headers = headers.set('Authorization','Bearer '+this.access_token);


  return this.http.get(url, { headers: headers });
}



}
