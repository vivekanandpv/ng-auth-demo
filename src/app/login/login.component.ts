import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  constructor(
    private authService: AuthService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.ar.snapshot.queryParamMap.get('returnUrl');
  }

  loginUser() {
    this.authService.login({
      username: 'General User',
      email: 'user@domain.com',
      role: ['user'],
    });
    this.navigate();
  }

  loginAdmin() {
    this.authService.login({
      username: 'Admin User',
      email: 'admin@domain.com',
      role: ['user', 'admin'],
    });
    this.navigate();
  }

  logout() {
    this.authService.logout();
  }

  navigate() {
    if (this.returnUrl) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigate(['/news']);
    }
  }
}
