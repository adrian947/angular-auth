import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['adrian@gmail.com', [Validators.required, Validators.email]],
      password: ['123123', [Validators.required, Validators.minLength(6)]],
    });
  }

  get currentUser() {
    return this.authService.currentUser() ?? { name: 'dsadsa' };
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (user) => {
        console.log('🚀 ~ user:', user);
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        }, 1000);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err,
        });
      },
    });
  }
}
