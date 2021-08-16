import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-registeration',
  templateUrl: './patient-registeration.component.html',
  styleUrls: ['./patient-registeration.component.css']
})
export class PatientRegisterationComponent implements OnInit {

  registerationData: any = {
    patientname: '',
    gender: '',
    age: undefined,
    address: '',
    city: '',
    mobilenumber: undefined,
    email: '',
    symptoms: ''
  };

  constructor(private toastr: ToastrService,
              public router: Router,) { }

  ngOnInit(): void {
  }

  save(formdata: NgForm){

    // we can call service to save checkout and cart data to store it in persistent memory like db
    // After saving, lets clear cart and checkout form & Redirect to all products page



    this.toastr.success('Registeration Successfull');

    this.registerationData = {
      patientname: '',
      gender: '',
      age: undefined,
      address: '',
      city: '',
      mobilenumber: undefined,
      email: '',
      symptoms: ''
    };    

    this.router.navigateByUrl('/products');

  }

}
