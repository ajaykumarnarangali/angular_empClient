import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilePicture: string = "https://static.vecteezy.com/system/resources/previews/019/900/322/non_2x/happy-young-cute-illustration-face-profile-png.png"
  profileStatus: boolean = false;
  adminDetails: any = {};

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    this.admin.getAdmin().subscribe((res: any) => {
      this.adminDetails = res;
      if (res.profile) {
        this.profilePicture = res.profile;
      }
    })
  }

  changeStatus() {
    this.profileStatus = !this.profileStatus;
  }

  handleFile(event:any){
    const file=event.target.files[0];
    const fileReader=new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload=(e:any)=>{
      this.profilePicture=e.target.result;
      this.adminDetails.profile=e.target.result;
    }
  }

  handleSubmit(){
    this.admin.updateAdmin(this.adminDetails).subscribe({
      next:(res)=>{
        this.changeStatus();
        this.ngOnInit();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
