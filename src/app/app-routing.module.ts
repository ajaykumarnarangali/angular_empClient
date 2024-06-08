import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent,canActivate:[adminGuard]},
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),canActivate:[adminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

