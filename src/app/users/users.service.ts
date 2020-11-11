import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  login(user): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  register(user): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
  setToken(token) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
