import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  access_token:any;
  constructor(public http: HttpClient) { }
  GetStatus() {
   let headers = new HttpHeaders();
  this.access_token=localStorage.getItem("token");

   //let token:string="lydhSAV1Jhs3clYzZ02Jq0NfBEo9SlEV06ItZwz7awlsTTeVCB5RBFTwIheYLSVpU3IWfZLCW3Cn5d4owspVNuTvCbXdDVa2JYA5LgsRst6aJxFlotoqZcCWeyxFs8IQm4ThNs7lA1XyI5FtK0gg9Sy06HkW_s3hMLVWv-2zQIegiqdgoEcWG5w684mx6b9CXXie6BhQO2UnXpAK4w-1BjV3miJyXEqPqdeoE8QzoPRdsLqEpzl7AP-vWqTRqCE73jN5AZ7slRjHt9-vn79kTns-8fFmnx9vTWPWI997hUK-pPTqWffcgSjlTIVcIbhw";
   const url: string = "https://dev-crowdapi.azurewebsites.net/api/admin/GetStausDropDown";
   headers = headers.set('Content-Type', 'application/json');
   headers = headers.set('Authorization', 'Bearer '+this.access_token);
   
   return this.http.get(url,  { headers: headers });

 }
}
