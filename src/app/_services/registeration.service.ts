import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registeration } from '../_models/Registeration';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  private SERVER_URL = environment.backendURL;

  private selectedRegisteration = new BehaviorSubject<Registeration>({
    patientname: '',
    gender: '',
    age: 0,
    address: '',
    city: '',
    mobilenumber: 0,
    email: '',
    symptoms: ''
  });
  currentRegisteration$ = this.selectedRegisteration.asObservable();


  constructor(private http: HttpClient) { }

  register(item: Registeration){

    let obj = JSON.stringify(item);

    return item;


  }

  resetRegisteration(){
    this.selectedRegisteration.next({
      patientname: '',
      gender: '',
      age: 0,
      address: '',
      city: '',
      mobilenumber: 0,
      email: '',
      symptoms: ''
    })
  }

}
