import {HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs";

export class GetToken{
    constructor(public http: HttpClient) { }
   


 GetToken() {
    // let headers = new HttpHeaders();
    const url: string = "https://dev-crowdapi.azurewebsites.net/token";
    //headers = headers.set('Content-Type', 'application/json');
    //headers = headers.set('Authorization', 'Bearer lydhSAV1Jhs3clYzZ02Jq0NfBEo9SlEV06ItZwz7awlsTTeVCB5RBFTwIheYLSVpU3IWfZLCW3Cn5d4owspVNuTvCbXdDVa2JYA5LgsRst6aJxFlotoqZcCWeyxFs8IQm4ThNs7lA1XyI5FtK0gg9Sy06HkW_s3hMLVWv-2zQIegiqdgoEcWG5w684mx6b9CXXie6BhQO2UnXpAK4w-1BjV3miJyXEqPqdeoE8QzoPRdsLqEpzl7AP-vWqTRqCE73jN5AZ7slRjHt9-vn79kTns-8fFmnx9vTWPWI997hUK-pPTqWffcgSjlTIVcIbhw');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('UserName', 'user');
    body = body.set('Password', 'VXNlciMxMjM=');
    body = body.set('grant_type', 'password');
    // return this.http.post(url, body, { headers: headers }).subscribe((data)=>{
    //   Object.values(data)[0];
    // });
    // return this.http.post(url, body, { headers: headers })
    //   .subscribe({
    //     next: (response: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    //       (Object.values(response)[0]);
         
    //     },
    //     error: (error: any) => console.log(error),
    //   });
    return this.http.post(url, body, { headers: headers })
      .pipe(map((response: any) =>{
        return Object.values(response)[0];
        //this.access_token=token;

      })
        );       
  }

}
