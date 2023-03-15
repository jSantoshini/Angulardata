import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadUsersService {

  constructor(public http: HttpClient) { }

  downloadUsersData(FromDate:string,ToDate:string,CountryID:number,Mode:number){
    let headers = new HttpHeaders();
    let access_token=localStorage.getItem("token");

    const url: string = "https://dev-crowdapi.azurewebsites.net/api/Admin/downloadUsers";
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + access_token);
    let body = new HttpParams();
    body = body.set('CountryID', CountryID);
    body = body.set('FromDate', FromDate);
    body = body.set('ToDate', ToDate);
    body = body.set('Mode', Mode);
    return this.http.post(url, body, { headers: headers });
  }
}
