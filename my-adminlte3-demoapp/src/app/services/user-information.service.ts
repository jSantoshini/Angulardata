import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(public http: HttpClient) { }

  UserInformation(RegistrationId:number){
    let headers = new HttpHeaders();
  
    let access_token=localStorage.getItem("token");
   
     const url: string = "https://dev-crowdapi.azurewebsites.net/api/Admin/UserSummary?";
     headers = headers.set('Content-Type', 'application/json');
     headers = headers.set('Authorization','Bearer '+access_token);
     let body = new HttpParams();
     body = body.set('RegistrationId', RegistrationId);
     return this.http.get(url+body, { headers: headers });
  
  }
}
