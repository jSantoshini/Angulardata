import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  createcustomer:boolean=false
  customer : any ={}
  customersdata:any=[];
  customerForm: any;
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.getcustomer()
   }
   createform(){
    // this.lineofbusiness.forEach((element: any) => {
    //   element.isEdit = false;
    // });
    // item.isEdit=true
    console.log("form started",this.createcustomer)
    this.createcustomer=!this.createcustomer
    console.log("form ended",this.createcustomer)
  }
customerf(){
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
getcustomer(){
  this.customer.mode = 2;
    this.api.customer(this.customer).subscribe((res:any)=>{
      console.log(res);
      this.customersdata=res
      console.log("customer result",this.customersdata)
    })
}
onEdit(item:any){
  this.customersdata.forEach((element: any) => {
    element.isEdit = false;

  });

  item.isEdit=true

}
updatecustomer(customerid:number){
  console.log("updated data",this.customersdata[customerid]);
  this.customer.mode = 3;
  this.customer.customerid=this.customersdata[customerid].customerid
  this.customer.customerName=this.customersdata[customerid].customerName
  this.customer.mailid=this.customersdata[customerid].mailid
  this.customer.countryid=this.customersdata[customerid].countryid
    this.api.customer(this.customer).subscribe((res:any)=>{
      console.log(res);
      this.customersdata=res
      console.log("customer result after updation",this.customersdata)
    })
}

deletecustomer(customerid:any){
  debugger
  this.customer.mode = 4;
  this.customer.customerid=customerid;
    this.api.customer(this.customer).subscribe((res:any)=>{
      console.log(res);
      this.customersdata=res
      console.log("customer result after deletion",this.customersdata)
    })
    }
}
//   this.customers.push({
//       customerid: 2, customerName: 'reeno',
//       mailid: '',
//       countryid: 0,
//       mode: 0
//     })
// updatecustomer(){
//   this.customer.mode = 3;
//     this.api.customer(this.customer).subscribe((res:any)=>{
//       console.log(res);
//     })
//     this.customers.update(this.customer)

// }
    //this.customer.mode = 2;
    // // this.api.customer(this.customer).subscribe((res:any)=>{
    // //   console.log(res);



  //   // this.data.push(productForm);
  //   // this.data.push({"mode":"1"})

  //   // this.data.push(Object.assign({mode: 1}, customerForm))
  //   // console.log(this.data);
  //   // // this.httpclient.post<any>(environment.url+"Admin/Customer",this.data).
  //   // subscribe(data => {
  //   // console.log(data)
  //   // this.postId = data});
  //   //this.customer = this.customerForm.value;
  //   console.log("Data",this.customerForm.value);
  //   this.api.customer(this.customerForm).subscribe(response => {
  //     console.log(response);
  //   })
  //     // this.customers.push({ customerid: 0,customerName: '',mailid: '',countryid: 0,"mode": 1});
  // }

  // customerf(){
  //   //this.customer = this.customerForm.value;
  //   // this.api.customer(this.customer).subscribe((res:any)=>{
  //   //   console.log(res);

  //   // this.customers.push({ customerid: 0,customerName: '',mailid: '',countryid: 0,"mode": 1});


  // customerf(customer:Customer){
  //   this.api.customer(customer).subscribe((res:any)=>{
  //     console.log(res);
  //   })

