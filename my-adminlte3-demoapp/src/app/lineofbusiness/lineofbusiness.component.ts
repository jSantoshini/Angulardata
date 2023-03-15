import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lineofbusiness',
  templateUrl: './lineofbusiness.component.html',
  styleUrls: ['./lineofbusiness.component.scss']
})
export class LineofbusinessComponent implements OnInit {
 // ngOnInit(): void {
  //   this.on()
  // }
  createbusiness:boolean=false
  business: any = {};
  lineofbusiness: any=[];
  businessForm: any;
  constructor(private api: ApiService, private httpclient: HttpClient) {}
  // on() {
  //   debugger
  //   var data = {"businessid": 0,"businessname": "string","mode": "2"};
  //   this.httpclient
  //     .post<any>('https://localhost:7154/api/Admin/LineofBussiness', data)
  //     .subscribe({next: (data) => {console.log(data);},
  //     error: (err) => {console.log(err);},
  //     complete: () => {},
  //   });
  // }
  ngOnInit(): void {
    this.getbusiness()
  }
  lineofbusinessf() {
    debugger;
    this.business.mode = 1;
    console.log(this.business);
    this.api.business(this.business).subscribe({
      next: (data: any) => {console.log(data);},
      error: (err: any) => {console.log(err);},
      complete: () => {window.location.reload()}

    });
  }
  getbusiness(){
    this.business.mode = 2;
    console.log(this.business);
    this.api.business(this.business).subscribe((res:any)=>{
    console.log(res);
      this.lineofbusiness=res
      console.log("subcategory result",this.lineofbusiness)
  })
  }
  createform(){
    // this.lineofbusiness.forEach((element: any) => {
    //   element.isEdit = false;
    // });
    // item.isEdit=true
    console.log("form started",this.createbusiness)
    this.createbusiness=!this.createbusiness
    console.log("form ended",this.createbusiness)
  }
  onEdit(item:any){
    this.lineofbusiness.forEach((element: any) => {
      element.isEdit = false;
    });
    item.isEdit=true
  }
  updatebusiness(businessid:any){
    console.log("updated data",this.lineofbusiness[businessid]);
    this.business.mode = 3;
    this.business.businessid=this.lineofbusiness[businessid].businessid
    this.business.businessname=this.lineofbusiness[businessid].businessname
      this.api.business(this.business).subscribe((res:any)=>{
        console.log(res);
        this.lineofbusiness=res
        console.log("business result after updation",this.lineofbusiness)
      })
  }

  deletebusiness(businessid:any){
    debugger
    this.business.mode = 4;
    this.business.businessid=businessid;
      this.api.business(this.business).subscribe((res:any)=>{
        console.log(res);
        this.lineofbusiness=res
        console.log("business result after deletion",this.lineofbusiness)
      })
      }
  }

  // // onSubmit(customerFor:any) {
  //   //this.data.push(customerForm);
  //   console.log("Store Data",customerForm);
  //   onSubmit(lineofbusinessForm:any) {
  //     // this.data.push(Object.assign({mode: 1},lineofbusinessForm))
  //     // console.log(this.data);
  //     // this.httpclient.post<any>(environment.url+"Admin/LineofBussiness",this.data).
  //     // subscribe(data => {
  //     //   console.log(data)
  //     //   this.postId = data});
  // //     this.business = this.lineofbusinessForm.value;
  // //     this.api.business(this.business).subscribe(data => {
  // //       console.log(data);
  // //     })
  // //   }
  // // }
  // //   business(business: any) {
  // //     throw new Error('Method not implemented.');

  //   }


