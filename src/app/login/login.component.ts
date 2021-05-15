import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private ar: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.ar.snapshot.queryParamMap.get('returnUrl');
  }

  loginUser() {}

  login() {
    this.authService.login(this.form.value).subscribe((data) => {
      console.log('Server', data);
    });
  }

  loginAdmin() {}

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
