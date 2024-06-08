import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url: string = "https://angular-empserver.onrender.com"

  constructor(private http: HttpClient) { }

  getAdmin() {
    return this.http.get(`${this.base_url}/users/1`)
  }

  updateAdmin(data: any) {
    return this.http.put(`${this.base_url}/users/1`,data);
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('admin');
  }

}
