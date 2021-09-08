import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  registration(url: string, value: { email: string }) {
    return this.http.post<{ token: string }>(url, value)
  }
}
