import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  // private authService = inject( AuthService );
  // public currentUser = computed(() => this.authService.currentUser() );
  constructor(private authService: AuthService) {}
  get currentUser() {
    console.log('🚀 ~ this.authService.currentUser:', this.authService.currentUser());
    const algo = this.authService.currentUser() ?? { name: 'Nada por aca' };
    return algo;
  }
}
