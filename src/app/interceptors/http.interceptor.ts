import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = request.clone({
      setHeaders: {
        'Authorization': 'Bearer your-token-here',
        'Content-Type': 'application/json'
      }
    });
    console.log('Requisição interceptada:', clonedRequest);

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        console.error('Erro na requisição:', error);
        throw error;
      })
    );
  }
}
