import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private errorhandler : ErrorHandler) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpResponse<any>) => {
        if (error.status == 400) {
          console.log("bad request")
        }
        else if(error.status == 500){

          console.log("internal server error")
        }
        else{
          console.log("unknown error")
        }
         
        throw error
      })
    )

  }

}
