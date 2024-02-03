import {Component, signal, Signal} from '@angular/core';
import {PatientService} from "../../core/services/patient.service";
import {BehaviorSubject, filter, map, switchMap, tap} from "rxjs";
import {PatientView} from "../../core/model/patient-view";
import {toSignal} from "@angular/core/rxjs-interop";
import {PageEvent} from "@angular/material/paginator";
import {PatientViewSearch} from "../../core/model/patient-view-search";
import {MatDialog} from "@angular/material/dialog";
import {AddPatientComponent} from "../add-patient/add-patient.component";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
    loadList$: BehaviorSubject<PatientViewSearch> = new BehaviorSubject({
        limit: 4,
        offset: 0
    });

    patients$:Signal<PatientView[]> = toSignal(this.loadList$.pipe(
        switchMap((params) => this.patientService.getPatients(params)),
        tap((response) => this.totalElements$.set(response.numOfTotalPatients)),
        map((response) => response.patients),
    ));

  totalElements$ = signal(0);

  constructor(
    private readonly patientService: PatientService,
    private readonly dialog: MatDialog
  ) {}

    handlePageChange(event: PageEvent){
        this.loadList$.next({limit:4, offset:event.pageIndex})
    }

    onAddPatient() {
        this.dialog.open(AddPatientComponent, {maxWidth: '800px'}).afterClosed().pipe(
            filter(patient => !!patient),
            switchMap((patient) => this.patientService.addPatient(patient))
        ).subscribe({
            next: () => this.loadList$.next({...this.loadList$.getValue()})
        })
    };
}
