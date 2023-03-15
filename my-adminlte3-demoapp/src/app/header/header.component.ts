import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  redirectTo(){
    this.router.navigateByUrl('dashboard/user')
  }
  redirectToCustomerpage(){
    this.router.navigateByUrl('dashboard/customer')
  }
  redirectToLineofbusiness(){
    this.router.navigateByUrl('dashboard/lineofbusiness')
  }
  redirectToProduct(){
    this.router.navigateByUrl('dashboard/product')
  }
  redirectToProductSubCategory(){
    this.router.navigateByUrl('dashboard/productsubcategory')
  }
  redirectToCountry(){
    this.router.navigateByUrl('dashboard/country')
  }
  redirectToUsersecurity(){
    this.router.navigateByUrl('dashboard/usersecurity')
  }
}
