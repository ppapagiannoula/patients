import {ChangeDetectionStrategy, Component, DestroyRef} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  logout(): void {
    this.authService.logout();
  }
}
