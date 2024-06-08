import { CanActivateFn } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {

  const admin=inject(AdminService);
  const router=inject(Router);
  const toastr=inject(ToastrService)

  if(admin.isLoggedIn()){
    return true
  }else{
    router.navigateByUrl('');
    toastr.warning("Login first");
    return false
  }
};
