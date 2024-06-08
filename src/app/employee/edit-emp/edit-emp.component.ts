import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import {Employee} from '../schemas/employee.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

   empId:string="";
   employee:Employee={};

   constructor(private ar:ActivatedRoute,private api:ApiService,private route:Router){
    this.ar.params.subscribe((res:any)=>{
      this.empId=res.id;
    })
   }

   ngOnInit(): void {
     this.getSingleEmployee(this.empId);
   }

   getSingleEmployee(id:string){
     this.api.getSpecific(id).subscribe({
      next:(res)=>{
        this.employee=res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  handleUpdate(){
    this.api.editEmployee(this.empId,this.employee).subscribe({
      next:(res)=>{
        this.route.navigateByUrl('employee');
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
