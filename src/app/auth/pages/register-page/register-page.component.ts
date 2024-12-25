import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {

 constructor(private authService: AuthService) {}

  // // Access computed properties
  get currentUser() {
    console.log('🚀 ~ this.authService.currentUser:', this.authService.currentUser());
    const algo = this.authService.currentUser() ?? { name: 'Nada por aca' };
    return algo;
  }

 }
