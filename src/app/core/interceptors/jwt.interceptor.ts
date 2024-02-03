import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LOCAL_STORAGE} from "../services/local-storage";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.localStorage.getItem('accessToken');

    if (accessToken) {
      return next.handle(request.clone({setHeaders: { Authorization: `Bearer ${accessToken}`}}));
    }
    return next.handle(request);
  }
}
