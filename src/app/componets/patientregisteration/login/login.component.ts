import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User> | undefined;

  constructor(private http: HttpClient, 
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    if(this.model?.username===undefined && this.model?.password===undefined)
      this.toastr.error('Username Password required');
    else if(this.model?.username===undefined){
      this.toastr.error('Username required');
    }
    else if(this.model?.password===undefined){
      this.toastr.error('Password required');
    }
    else{
      this.accountService.login(this.model).subscribe((response:any)=>{
        if(response){
          this.toastr.success('Login Successfull')
          this.router.navigateByUrl('/');
        }
        else{
          this.toastr.error('Incorrect');
        }
    });
  }
  }

}
