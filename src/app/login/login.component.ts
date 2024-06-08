import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  password:string=""

  constructor(private toastr:ToastrService, private admin:AdminService,private route:Router){}

  handleLogin(){
    if(this.email && this.password){

      let result= this.admin.getAdmin();
      result.subscribe({
        next:(result:any)=>{
          if(this.email ===result.email && this.password===result.password){
            this.toastr.success("login success!!");
            sessionStorage.setItem('admin',JSON.stringify(result))
            this.route.navigateByUrl('home');
          }else{
            this.toastr.error("login failed!!")
          }
        },
        error:(err)=>{console.log(err)}
      })
      
    }else{
      this.toastr.error("login failed!!")
    }
  }

}
