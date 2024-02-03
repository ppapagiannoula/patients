import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
