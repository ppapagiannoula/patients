import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'app-patient',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientComponent {}
