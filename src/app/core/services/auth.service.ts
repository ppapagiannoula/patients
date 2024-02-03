import {Inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, tap} from "rxjs";
import {LOCAL_STORAGE} from "./local-storage";
import {Router} from "@angular/router";
import {environment} from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/users/login`;

  isAuthenticated$ : WritableSignal<boolean | null> = signal(!!this.localStorage.getItem('accessToken'));

  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    private http: HttpClient,
    private router: Router,
  ) {}

  login(username: string, password: string):Observable<any> {
    return this.http.post(this.apiUrl, {username, password}).pipe(
      tap((response: any) => {
        this.localStorage.setItem('accessToken', response.access_token);
        this.isAuthenticated$.set(true);
      })
    );
  }

  logout(): void {
    this.localStorage.clear();
    this.isAuthenticated$.set(false);
    this.router.navigate(['/login']);
  }
}
