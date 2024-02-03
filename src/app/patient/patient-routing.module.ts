import {RouterModule, Routes} from "@angular/router";
import {PatientsComponent} from "./patients/patients.component";
import {PatientComponent} from "./patient.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: '',
        component:PatientsComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
