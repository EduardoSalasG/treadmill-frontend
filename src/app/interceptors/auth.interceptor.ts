import { HttpEvent, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = inject(AuthService).getToken();

  const authReq = req.clone({ headers: req.headers.append('Authorization', `Bearer ${authToken}`) });

  // console.log("interceptor", authToken)

  return next(authReq);
}
