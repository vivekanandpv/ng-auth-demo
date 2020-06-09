import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserInfo {
  username: string;
  email: string;
  role: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserInfo>(null);

  user$ = this.userSubject.asObservable();

  constructor() {}

  login(user: UserInfo) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
