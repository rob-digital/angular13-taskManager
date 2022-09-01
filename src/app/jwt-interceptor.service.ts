import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  /*
  Actually what happens is that, whenever we try to create and send a HTTP request by using HttpClient,
  Angular automatically invokes the JwtInterceptor service,
  and also automatically call the "intercept" method inside it.
  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>    // this method MUST be created here
  {
    let currentUser = { token: "" }

    if (sessionStorage["currentUser"] != null) {
      currentUser = JSON.parse(sessionStorage["currentUser"])
    }

      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + currentUser.token
        }
      })

      return next.handle(request);

    }
  }


    // let currentUser = { token: "" };               // manually create JWT
    // let headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");

    // if (sessionStorage['currentUser'] != null)
    // {
    //   currentUser = JSON.parse(sessionStorage['currentUser']);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }
