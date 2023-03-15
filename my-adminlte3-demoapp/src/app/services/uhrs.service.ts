import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UhrsService {

  constructor(public http: HttpClient) { }
 GetUHRS(UHRS_JudgeID:number,  RegistrationID:number,  JudgeID:number,  FirstName:string,  LastName:string,
    Email:string,  Password:string,  AuthUserName:string,  CountryCode:string,  Desc:string,
      ExpireAt:string,  Market:string,  VerifyEmail:number,  TeamName:string,  Alias:string,
        VendorName:string,  VendorID:number,  IsCrowdSourcingEnabled:boolean,  JudgeIds:string, 
         Languages:string, Suspect:boolean, Mode:number)
 {
  let headers = new HttpHeaders();
  
  let access_token=localStorage.getItem("token");
 
   const url: string = "https://dev-crowdapi.azurewebsites.net/api/Admin/Uhrs?";
   headers = headers.set('Content-Type', 'application/json');
   headers = headers.set('Authorization','Bearer '+access_token);
   let body = new HttpParams();
   body = body.set('UHRS_JudgeID', UHRS_JudgeID);
   body = body.set('RegistrationID', RegistrationID);
   body = body.set('JudgeID', JudgeID);
   body = body.set('FirstName', FirstName);
   body = body.set('LastName', LastName);
   body = body.set('Email', Email);
   body = body.set('Password', Password);
   body = body.set('AuthUserName', AuthUserName);
   body = body.set('CountryCode', CountryCode);
   body = body.set('Desc', Desc);
   body = body.set('ExpireAt', ExpireAt);
   body = body.set('Market', Market);
   body = body.set('VerifyEmail', VerifyEmail);
   body = body.set('TeamName', TeamName);
   body = body.set('Alias', Alias);
   body = body.set('VendorName', VendorName);
   body = body.set('VendorID', VendorID);
   body = body.set('IsCrowdSourcingEnabled', IsCrowdSourcingEnabled);
   body = body.set('JudgeIds', JudgeIds);
   body = body.set('Languages', Languages);
   body = body.set('Suspect', Suspect);
   body = body.set('Mode', Mode);
   return this.http.get(url+body, { headers: headers });

 }

}
