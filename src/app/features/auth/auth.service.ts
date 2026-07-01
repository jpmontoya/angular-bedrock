import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest { username: string; password: string; }
export interface LoginResponse { token: string; }

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly http = inject(HttpClient);

  login(credentials: LoginRequest) {
    return this.http.post(`https://dummyjson.com/auth/login`,
      {
        username: credentials.username,
        password: credentials.password
      },
        {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
