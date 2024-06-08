import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './employee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: '', component: EmpListComponent },
  { path: 'add', component: AddEmpComponent },
  { path: 'edit/:id', component: EditEmpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
