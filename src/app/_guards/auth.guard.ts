import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {  
  }  

  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map(
        (u: any) => {
          if (u?.username == "") {
            this.toastr.error('Kindly Login First...');
            this.router.navigateByUrl('/login');
            return false;
          }
          else if(u?.username =="admin"){
            return true;            
          }
          else{
            this.toastr.error('Only admin can access this page...');
            this.router.navigateByUrl('/login');
            return false;
          }
        }
      )
    );
  }
}
