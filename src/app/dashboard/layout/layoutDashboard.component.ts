import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layoutDashboard.component.html',
  styleUrl: './layoutDashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboardComponent {
  private authService = inject( AuthService );
  public currentUser = computed(() => this.authService.currentUser() );

  // constructor(private authService: AuthService) {}
  // get currentUser() {
  //   return this.authService.currentUser() ?? { name: 'Nada por aca' };
  // }
}
