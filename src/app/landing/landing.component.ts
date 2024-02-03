import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'app-landing',
  template: `<router-outlet ></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
