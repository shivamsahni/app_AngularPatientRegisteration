import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListregisterationsComponent } from './componets/patientregisteration/listregisterations/listregisterations.component';
import { LoginComponent } from './componets/patientregisteration/login/login.component';
import { PatientRegisterationComponent } from './componets/patientregisteration/patient-registeration/patient-registeration.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: PatientRegisterationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: PatientRegisterationComponent},
  {path: 'registerations', component: ListregisterationsComponent, canActivate: [AuthGuard]},    
  {path: '**', component: PatientRegisterationComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
