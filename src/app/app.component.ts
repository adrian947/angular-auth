import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = '11-angular-auth';
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.checkAuthStatus().subscribe((isAuthenticated) => {
      console.log('Auth check finished. Authenticated:', isAuthenticated);
    });
  }
}
