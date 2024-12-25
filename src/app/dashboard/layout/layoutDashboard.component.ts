import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layoutDashboard.component.html',
  styleUrl: './layoutDashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  public currentUser = computed(() => this.authService.currentUser());

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  // constructor(private authService: AuthService) {}
  // get currentUser() {
  //   return this.authService.currentUser() ?? { name: 'Nada por aca' };
  // }
}
