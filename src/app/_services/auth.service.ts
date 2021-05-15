import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserInfo {
  username: string;
  email: string;
  role: string[];
}

export interface UserLoginViewModel {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserInfo>(null);

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(user: UserLoginViewModel) {
    return this.http
      .post<any>('http://localhost:5000/api/auth/login', user)
      .pipe(tap((v) => localStorage.setItem('token', v.token)));
  }

  logout() {
    this.userSubject.next(null);
  }
}
