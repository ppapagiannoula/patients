import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LandingComponent} from "./landing.component";
import {RouterOutlet} from "@angular/router";
import {LandingRoutingModule} from "./landing-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    LandingRoutingModule,
    MatButtonModule,
      MatFormFieldModule,
      MatInputModule
  ]
})
export class LandingModule { }
