import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginUser() {
    this.authService.login({
      username: 'General User',
      email: 'user@domain.com',
      role: ['user'],
    });
  }

  loginAdmin() {
    this.authService.login({
      username: 'Admin User',
      email: 'admin@domain.com',
      role: ['user', 'admin'],
    });
  }

  logout() {
    this.authService.logout();
  }
}
