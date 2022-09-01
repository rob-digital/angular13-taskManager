import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlPrefix: string = "http://localhost:9090";
  private httpClient: HttpClient
  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService)
  {
  }

  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend)

    return this.httpClient.post<any>(this.urlPrefix + "/authenticate", loginViewModel, { responseType: "json" })
      .pipe(map(user =>
      {
        if (user)
        {
          this.currentUserName = user.userName;
          sessionStorage['currentUser'] = JSON.stringify(user);
        }
        return user;
      }));
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated(): boolean
  {
    let token = sessionStorage.getItem("currentUser")
                  ? JSON.parse(sessionStorage.getItem("currentUser")).token
                  : null;

    if (this.jwtHelperService.isTokenExpired()) {
      return false
    } else {
      return true
    }
  }
}
