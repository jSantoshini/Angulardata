import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { data } from 'jquery';
import { ApiService } from '../api.service'
import { usersecurity } from '../Models/usersecurity';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss']
})
export class UserSecurityComponent implements OnInit {
  product:any={};
  // userproduct:any={};
  productsdata:any=[];
  dd_product:any = [];
  business: any = {};
  lineofbusiness: any=[];
  dd_business:any = [];
  customer : any ={}
  customersdata:any=[];
  dd_customer:any = [];
  country:any={};
  countries:any;
  dd_country:any =[];
  user : any ={}
  users:any=[];
  dd_user:any = [];
  usersecurity:any={};
  securitydata: boolean = true;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getuser()
  }

  userproductf(){
  debugger
  this.product.mode=1
  console.log(this.product)
  this.api.product(this.product).subscribe({
       next : (data: any) => {console.log(data)},
      error:(err: any) => {console.log(err);},
      complete: () => {window.location.reload()}
    });
}
  usergetproduct(){
    this.product.mode = 2;
    console.log(this.product)
      this.api.product(this.product).subscribe((res:any)=>{
        console.log(res);
        this.productsdata=res
        console.log("user result",this.productsdata)
      });
  }
  userlineofbusinessf() {
    debugger;
    this.business.mode = 1;
    console.log(this.business);
    this.api.business(this.business).subscribe({
      next: (data: any) => {console.log(data);},
      error: (err: any) => {console.log(err);},
      complete: () => {window.location.reload()}

    });
  }
  usergetbusiness(){
    this.business.mode = 2;
    console.log(this.business);
    this.api.business(this.business).subscribe((res:any)=>{
    console.log(res);
      this.lineofbusiness=res
      console.log("subcategory result",this.lineofbusiness)
  })
  }
  usercustomerf(){
    this.customer.mode=1
    console.log(this.customer)
    this.api.customer(this.customer).subscribe({
       next : (data) => {console.log(data)},
      //  next: (res) => {console.log(res);
      //                 this.refreshList();
      // },
      error:(err) => {console.log(err);},
      complete: () => {window.location.reload()}
    });
}
usergetcustomer(){
  this.customer.mode = 2;
    this.api.customer(this.customer).subscribe((res:any)=>{
      console.log(res);
      this.customersdata=res
      console.log("customer result",this.customersdata)
    })
}
usercountryf(){
  debugger
this.country.mode=1
console.log(this.country)
this.api.country(this.country).subscribe({
   next : (data: any) => {console.log(data)},
  error:(err: any) => {console.log(err);},
  complete: () => {window.location.reload()}
});
}
usergetcountry(){
this.country.mode = 2;
  this.api.country(this.country).subscribe((res:any)=>{
    console.log(res);
    this.countries=res;
    console.log("country result",this.countries)
  })
}
dropdownf(){

  this.usergetproduct()
  this.usergetbusiness()
  this.usergetcustomer()
  this.usergetcountry()
  console.log(this.dd_user)
   this.usersecurity.mode = 5
  this.usersecurity.userid=this.dd_user
  this.api.usersecurity(this.usersecurity).subscribe((data:any) => {
    if(data == 0){
    this.securitydata = true
    this.dd_product = [];
    this.dd_business =[];
    this.dd_country =[];
    this.dd_customer =[];
    }
    else{


    this.securitydata = false
    var sec : usersecurity = data[0];
    this.dd_product = sec.productid.split(',').map(str => parseInt(str));
    this.dd_business = sec.businessid.split(',').map(str => parseInt(str));
    this.dd_country =sec.countryid.split(',').map(str => parseInt(str));
    this.dd_customer = sec.customerid.split(',').map(str => parseInt(str));
    // var prod = sec.productid.split(',').map(str => parseInt(str));
    // console.log('onit',prod)

    }

  }


  )

}


userf(){
  this.user.mode=1
  console.log(this.user)
  this.api.user(this.user).subscribe({
     next : (data: any) => {console.log(data)},
    error:(err: any) => {console.log(err);},
    complete: () => {window.location.reload()}
  });
}
getuser(){
  this.user.mode = 2;
    this.api.user(this.user).subscribe((res:any)=>{
      console.log(res);
    this.users=res
    console.log("user result",this.users)
    })
}
submitf( ){

    // console.log(this.dd_product)
    // console.log(this.dd_business)
    // console.log(this.dd_customer)
    // console.log(this.dd_country)
    // console.log(this.dd_user)
    console.log(typeof(this.dd_business))
    var businessList = this.dd_business
    var countrylist = this.dd_country
    var customerlist = this.dd_customer
    var prodctlist = this.dd_product
  // var dd = d.join(',')
    // console.log("testingjoin",typeof(dd))
    this.usersecurity.userid =this.dd_user
    this.usersecurity.businessid=businessList.join(',')
    this.usersecurity.countryid=countrylist.join(',')
    this.usersecurity.customerid=customerlist.join(',')
    this.usersecurity.productid=prodctlist.join(',')
    this.usersecurity.mode=1
    console.log("submitf:",this.usersecurity)
    this.api.usersecurity(this.usersecurity).subscribe({
      next : (data: any) => {console.log(data)},
     error:(err: any) => {console.log(err);},
     complete: () => {}
   });
  }
  updatef(){
    console.log(typeof(this.dd_business))
    var businessList = this.dd_business
    var countrylist = this.dd_country
    var customerlist = this.dd_customer
    var prodctlist = this.dd_product
  // var dd = d.join(',')
    // console.log("testingjoin",typeof(dd))
    this.usersecurity.userid =this.dd_user
    this.usersecurity.businessid=businessList.join(',')
    this.usersecurity.countryid=countrylist.join(',')
    this.usersecurity.customerid=customerlist.join(',')
    this.usersecurity.productid=prodctlist.join(',')
    this.usersecurity.mode=3
    console.log("updatef:",this.usersecurity)
    this.api.usersecurity(this.usersecurity).subscribe({
      next : (data: any) => {console.log(data)},
     error:(err: any) => {console.log(err);},
     complete: () => {}
   });

  }
//   bindf(){
//     debugger
//    var str_value:any =[3,6]
//   //  let result = ["1", "2", "3", "4"].map(i=>Number(i));
//   //  let intList = str_value.map(Number);
//   // let intList = ["1", "3", "6"].map(str => parseInt(str));
// // console.log(result);
//    this.dd_product = str_value;
//   }
}
