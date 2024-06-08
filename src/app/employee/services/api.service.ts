import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Base_url:string="https://angular-empserver.onrender.com"

  constructor(private http:HttpClient) { }

  addEmployee(data:any){
    return this.http.post(`${this.Base_url}/employees`,data);
  }

  getEmpoyee(){
    return this.http.get(`${this.Base_url}/employees`);
  }

  deleteEmployee(id:string){
    return this.http.delete(`${this.Base_url}/employees/${id}`);
  }
  
  getSpecific(id:string){
    return this.http.get(`${this.Base_url}/employees/${id}`);
  }
  
  editEmployee(id:string,data:any){
    return this.http.put(`${this.Base_url}/employees/${id}`,data);
  }

}
