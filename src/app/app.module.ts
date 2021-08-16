import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/patientregisteration/login/login.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MenubarModule} from 'primeng/menubar';
import { ToastrModule } from 'ngx-toastr';
import { PatientRegisterationComponent } from './componets/patientregisteration/patient-registeration/patient-registeration.component';
import { ListregisterationsComponent } from './componets/patientregisteration/listregisterations/listregisterations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PatientRegisterationComponent,
    ListregisterationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
