import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth.interfaces';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Esperar a que se complete la verificación de autenticación
  return authService.checkAuthStatus().pipe(
    switchMap(() => {
      const status = authService.authStatus();
      if (status === AuthStatus.notAuthenticated || status === AuthStatus.checking) {
        return of(true); // Permitir acceso
      }

      router.navigateByUrl('dashboard'); // Redirigir al login
      return of(false); // Bloquear acceso
    })
  );
};
