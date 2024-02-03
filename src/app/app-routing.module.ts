import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation/navigation.component";
import {authGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'home',
    component: NavigationComponent,
    canActivate: [authGuard],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patients',
      },
      {
        path: 'patients',
        loadChildren: () => import('./patient/patient.module').then((m) => m.PatientModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
