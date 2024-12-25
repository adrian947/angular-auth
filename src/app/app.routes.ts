import { Routes } from '@angular/router';
import { isAuthGuard } from './auth/guards/isAuth.guard';
import { isNotAuthGuard } from './auth/guards/isNotAuth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthGuard],
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
