import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  createproduct:boolean=false
  product:any={};
  products:any=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getproduct()
  }

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
createform(){
  // this.lineofbusiness.forEach((element: any) => {
  //   element.isEdit = false;
  // });
  // item.isEdit=true
  console.log("form started",this.createproduct)
  this.createproduct=!this.createproduct
  console.log("form ended",this.createproduct)
}
onEdit(item:any){
  this.products.forEach((element: any) => {
    element.isEdit = false;

  });

  item.isEdit=true

}
updateproduct(productid:number){
  console.log("updated data",this.products[productid]);
  this.product.mode = 3;
  this.product.productid=this.products[productid].productid
  this.product.productname=this.products[productid].productname
  this.product.productcode=this.products[productid].productcode
  this.product.productdescription=this.products[productid].productdescription
    this.api.product(this.product).subscribe((res:any)=>{
      console.log(res);
      this.products=res
      console.log("product result after updation",this.products)
    })
}

deleteproduct(productid:any){
  debugger
  this.product.mode = 4;
  this.product.productid=productid;
    this.api.product(this.product).subscribe((res:any)=>{
      console.log(res);
      this.products=res
      console.log("product result after deletion",this.products)
    })
    }

}
//   onSubmit(productForm:any) {
//     debugger
//     // this.data.push(productForm);
//     // this.data.push({"mode":"1"})
//     // console.log("type" , typeof(productForm))

//     productForm.push({mode: 1})
// console.log(productForm);
//     this.data.push(productForm);
//     // productForm.push("mode:1")
//     console.log(productForm);
//     this.httpclient.post<any>(environment.url+"Admin/Product",this.data).
//     subscribe(data => {
//       console.log(data)
//       this.postId = data});
//    }
// productf(){
//   this.product.mode=2
//   console.log(this.product);

// }

