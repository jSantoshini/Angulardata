import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  createuser:boolean=false
  user : any ={}
  userform: any
  users:any=[];
  constructor(private api:ApiService) {}
  ngOnInit(): void {

    this.getuser()
    // this.user.mode = 2;
    // this.api.customer(this.user).subscribe((res:any)=>{
    // console.log(res);
    // })
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
  createform(){
    // this.lineofbusiness.forEach((element: any) => {
    //   element.isEdit = false;
    // });
    // item.isEdit=true
    console.log("form started",this.createuser)
    this.createuser=!this.createuser
    console.log("form ended",this.createuser)
  }
  onEdit(item:any){
    this.users.forEach((element: any) => {
      element.isEdit = false;
    });
    item.isEdit=true
  }

  updateuser(userid:any){
    console.log("updated data",this.users[userid]);
    this.user.mode = 3;
    this.user.userid=this.users[userid].userid
    this.user.userName=this.users[userid].userName
    this.user.firstName=this.users[userid].firstName
    this.user.lastName=this.users[userid].lastName
    this.user.mailid=this.users[userid].mailid
    this.user.password=this.users[userid].password
      this.api.user(this.user).subscribe((res:any)=>{
        console.log(res);
        this.users=res
        console.log("user result after updation",this.users)
      })
  }

  deleteuser(userid:any){
    this.user.mode = 4;
    this.user.userid=userid;
      this.api.user(this.user).subscribe((res:any)=>{
        console.log(res);
        this.users=res
        console.log("user result after deletion",this.users)
      })
  }

}
