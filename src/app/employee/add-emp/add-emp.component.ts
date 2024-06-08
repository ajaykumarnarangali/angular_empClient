import { Component } from '@angular/core';
import { Employee } from '../schemas/employee.component';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  emp:Employee={}

  constructor(private api:ApiService,private toastr:ToastrService,private router:Router){}

  handleSubmit(){
    this.api.addEmployee(this.emp).subscribe(
      {
        next:(res:any)=>{

          this.toastr.success("employee added !!");
          this.emp={};
          this.router.navigateByUrl('employee');

        },
        error:(err:any)=>{
          this.toastr.error("error occured");
        }
      }
    )
  }
    
}
