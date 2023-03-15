import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productsubcategory',
  templateUrl: './productsubcategory.component.html',
  styleUrls: ['./productsubcategory.component.scss']
})
export class ProductsubcategoryComponent implements OnInit {
  createsubcategory:boolean=false
  product:any={}
  products:any=[];
  subcategory : any ={}
  subcategories:any= [];
   constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getsubproduct()
  }
//   onSubmit(subcategoryForm:any) {

//   //   this.data.push(Object.assign({mode: 1}, subcategoryForm))
//   //   console.log(this.data);
//   //   this.httpclient.post<any>(environment.url+"Admin/Productsubcategory",this.data).
//   //   subscribe((data: any) => {
//   //     console.log(data)
//   //     this.postId = data});
//   //  }
// // }
productf(){
  debugger
  this.product.mode=1
  console.log(this.product)
  this.api.product(this.product).subscribe({
       next : (data: any) => {console.log(data)},
      error:(err: any) => {console.log(err);},
      complete: () => {window.location.reload()}
    });
}
getproduct(){
  this.product.mode = 2;
    this.api.product(this.product).subscribe((res:any)=>{
      console.log(res);
      this.products=res
      console.log("product result",this.products)
    })
}
subproductf(){
  debugger
    this.subcategory.mode=1
    console.log(this.subcategory)
    this.api.subproduct(this.subcategory).subscribe({
       next : (data: any) => {console.log(data)},
      error:(err: any) => {console.log(err);},
      complete: () => {window.location.reload()}
    });
}
getsubproduct(){
  this.subcategory.mode = 2;
    this.api.subproduct(this.subcategory).subscribe((res:any)=>{
      console.log(res);
      this.subcategories=res
      console.log("subcategory result",this.subcategories)
    })
}
createform(){
  // this.lineofbusiness.forEach((element: any) => {
  //   element.isEdit = false;
  // });
  // item.isEdit=true
  console.log("form started",this.createsubcategory)
  this.createsubcategory=!this.createsubcategory
  console.log("form ended",this.createsubcategory)
}

onEdit(item:any){
  this.subcategories.forEach((element: any) => {
    element.isEdit = false;
  });
  item.isEdit=true
}

updatesubcategory(subcategoryid:any){
  console.log("updated data",this.subcategories[subcategoryid]);
  this.subcategory.mode = 3;
  this.subcategory.subcategoryid=this.subcategories[subcategoryid].subcategoryid
  this.subcategory.subcategoryname=this.subcategories[subcategoryid].subcategoryname
    this.api.subproduct(this.subcategory).subscribe((res:any)=>{
      console.log(res);
      this.subcategories=res
      console.log("subcategory result after updation",this.subcategories)
    })
}

deletesubcategory(subcategoryid:any){

  this.subcategory.mode = 4;
  this.subcategory.subcategoryid=subcategoryid;
    this.api.subproduct(this.subcategory).subscribe((res:any)=>{
      console.log(res);
      this.subcategories=res
      console.log("subcategory result after deletion",this.subcategories)
    })
    }
}
