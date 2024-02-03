import {Component, Input, Signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../core/services/patient.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {PatientView} from "../../core/model/patient-view";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  patientId: number = Number(this.route.snapshot.paramMap.get('id'));

  patient$: Signal<PatientView> = toSignal(
      this.patientService.getPatient(this.patientId).pipe(
          map(patients => patients[0])
      )
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly patientService: PatientService
  ) {}
}
