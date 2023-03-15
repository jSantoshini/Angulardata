import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  constructor(public http: HttpClient) { }

  registration( RegistrationId:number,  UserTypeID:number,  FirstName:string,  LastName:string,  MiddleName:string,  EmailId:string,  LoginID:string,  Password:string,  PhoneNumber:string,  DateOfBirth:string,  CountryID:number,  StateId:number,  City:string,  ZipCode:string,  TimeZoneId:number,  Address:string,  TermsandConditions:boolean,  legalToWork:boolean,  Status:string,  OtherCountryName:string,  userActive:boolean,  FormDate:string,  ToDate:string,  Tipalti_Paystatus:string, 
    Comments:string,ReferenceCode:string,SecurityLevel:string,referral:string,Payoneer_Paystatus:string, Mode:number){
    let headers = new HttpHeaders();
  
   let access_token=localStorage.getItem("token");
  
    const url: string = "https://dev-crowdapi.azurewebsites.net/api/User/CRUDRegistration?";
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization','Bearer '+access_token);
    let body = new HttpParams();
    body = body.set('RegistrationId', RegistrationId);
    body = body.set('UserTypeID', UserTypeID);
    body = body.set('FirstName', FirstName);
    body = body.set('LastName', LastName);
    body = body.set('MiddleName', MiddleName);
    body = body.set('EmailId', EmailId);
    body = body.set('LoginID', LoginID);
    body = body.set('Password', Password);
    body = body.set('PhoneNumber', PhoneNumber);
    body = body.set('DateOfBirth', DateOfBirth);
    body = body.set('CountryID', CountryID);
    body = body.set('StateId', StateId);
    body = body.set('City', City);
    body = body.set('ZipCode', ZipCode);
    body = body.set('TimeZoneId', TimeZoneId);
    body = body.set('Address', Address);
    body = body.set('TermsandConditions', TermsandConditions);
    body = body.set('legalToWork', legalToWork);
    body = body.set('Status', Status);
    body = body.set('OtherCountryName', OtherCountryName);
    body = body.set('userActive', userActive);
    body = body.set('FormDate', FormDate);
    body = body.set('ToDate', ToDate);
    body = body.set('Tipalti_Paystatus', Tipalti_Paystatus);
    body = body.set('Comments', Comments);
    body = body.set('ReferenceCode', ReferenceCode);
    body = body.set('SecurityLevel', SecurityLevel);
    body = body.set('referral', referral);
    body = body.set('Payoneer_Paystatus', Payoneer_Paystatus);
    body = body.set('Mode', Mode);
  
    return this.http.get(url+body, { headers: headers });
  }
}
