import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    console.log("petición interceptor: ", request);
    debugger;
    req = request.clone ({
      body: request.body,
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJUuz'
      }
    });
    return next.handle(request);
    //return next.handle(req);
  }
}
