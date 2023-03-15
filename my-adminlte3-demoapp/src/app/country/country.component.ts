import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  
  createcountry:boolean=false
  country:any={};
  countries:any;
  countryForm: any;
  constructor(private api:ApiService) {}


  ngOnInit(): void {
    this.getcountry()
  }
  countryf(){
    debugger
  this.country.mode=1
  console.log(this.country)
  this.api.country(this.country).subscribe({
     next : (data: any) => {console.log(data)},
    error:(err: any) => {console.log(err);},
    complete: () => {window.location.reload()}
  });
}
getcountry(){
  this.country.mode = 2;
    this.api.country(this.country).subscribe((res:any)=>{
      console.log(res);
      this.countries=res;
      console.log("country result",this.countries)
    })
}
createform(){
  // this.lineofbusiness.forEach((element: any) => {
  //   element.isEdit = false;
  // });
  // item.isEdit=true
  console.log("form started",this.createcountry)
  this.createcountry=!this.createcountry
  console.log("form ended",this.createcountry)
}
onEdit(item:any){
  this.countries.forEach((element: any) => {
    element.isEdit = false;
  });
  item.isEdit=true
}

updatecountry(countryid:any){
  console.log("updated data",this.countries[countryid]);
  this.country.mode = 3;
  this.country.countryid=this.countries[countryid].countryid
  this.country.countryname=this.countries[countryid].countryname
    this.api.country(this.country).subscribe((res:any)=>{
      console.log(res);
      this.countries=res
      console.log("country result after updation",this.countries)
    })
}

deletecountry(countryid:any){
  debugger
  this.country.mode = 4;
  this.country.countryid=countryid;
    this.api.country(this.country).subscribe((res:any)=>{
      console.log(res);
      this.countries=res
      console.log("country result after deletion",this.countries)
    })
    }
}


