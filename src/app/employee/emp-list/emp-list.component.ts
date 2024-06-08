import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employee:any=[ ];
  searchTerm:string=""

  constructor(private api:ApiService){  }

  ngOnInit():void{
    this.getEmployee();
  }
  
  getEmployee(){
   this.api.getEmpoyee().subscribe({
    next:(res)=>{
      this.employee=res;
    },
    error:(err)=>{console.log(err)}
   })
  }

  handleDelete(id:string){
    this.api.deleteEmployee(id).subscribe({
      next:(res)=>{this.getEmployee()},
      error:(err)=>{console.log(err)}
    })
  }

  exportToPdf(){
   
    const doc = new jsPDF();

    const body=this.employee.map((each:any)=>Object.values(each))
    
    autoTable(doc,{
      head:[['ID','USERNAME','EMAIL','STATUS']],
      body:body  
    })
 
    doc.save('Employee.pdf')

  }

}
