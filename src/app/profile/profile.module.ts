import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ProfileRoutingModule} from "./profile-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatIcon,
  ]
})
export class ProfileModule { }
