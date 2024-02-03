import { Component } from '@angular/core';
import {Form, FormBuilder, FormControl, UntypedFormControl, Validators} from "@angular/forms";
import {validatorMessageMap} from "./add-patient";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {

  patientForm = this.fb.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null],
    address_street: [null],
    address_number: [null],
    address_postalcode: [null],
    address_city: [null],
  });

  readonly validatorMessageMap = validatorMessageMap;

  constructor(
      private readonly fb: FormBuilder
  ) {}

  shouldShowError(controlName: string): boolean {
    const control = this.control(controlName);
    return !(control.valid) && (control.dirty || control.touched)
  }

  control(controlName: string): FormControl {
    return this.patientForm.get(controlName) as FormControl;
  }
}
