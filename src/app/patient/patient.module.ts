
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import {PatientComponent} from "./patient.component";
import {RouterOutlet} from "@angular/router";
import {PatientRoutingModule} from "./patient-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { AddPatientComponent } from './add-patient/add-patient.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PatientsComponent,
    PatientComponent,
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PatientRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class PatientModule { }
