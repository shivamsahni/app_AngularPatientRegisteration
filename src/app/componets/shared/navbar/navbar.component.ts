import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';
import {MenuItem} from 'primeng/api'; 
import { AccountService } from 'src/app/_services/account.service';
import { Router } from '@angular/router';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];
  currentUser$: Observable<User> | undefined;
  loggedIn: boolean = false;
  

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;

    this.currentUser$.subscribe(pipe((u: any) => {
        if (u?.username !== undefined)
            this.loggedIn = true;
    }))

    this.items = [
      {
        label: 'PatientRegisteration',
        icon: 'pi pi-fw pi-star-o',
        routerLink: '/register'
    }
    ]
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
}  

}
