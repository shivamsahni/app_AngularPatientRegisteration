import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PatientRegisteration';

  
  constructor(private http: HttpClient, private accountService: AccountService){

  }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const u:any = localStorage.getItem('user')?.toString();
    let user: User ={'username': 'dummy'};
    if(u===undefined){
      user = {'username': ""};
    }
    else
    { user = {'username': u};}
    
    this.accountService.setCurrentUser(user);
  }


}
