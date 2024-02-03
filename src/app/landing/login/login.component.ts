import {ChangeDetectionStrategy, Component} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: UntypedFormGroup = this.fb.group({
    username: [
       null,
      [Validators.required],
    ],
    password: [null, [Validators.required]],

  });

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private authService: AuthService,
  ) {}

  onSubmit(): void {
    this.authService.login(this.form.value.username, this.form.value.password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
