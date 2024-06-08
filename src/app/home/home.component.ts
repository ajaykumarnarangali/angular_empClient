import { Component } from '@angular/core';
import { ApiService } from '../employee/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  count: number = 0
  constructor(private api: ApiService,private router:Router) {
    this.api.getEmpoyee().subscribe({
      next: (res: any) => {
        this.count = res.length;
      }
    })
  }

  Logout(){
    sessionStorage.removeItem('admin');
    this.router.navigateByUrl('');
  }

}