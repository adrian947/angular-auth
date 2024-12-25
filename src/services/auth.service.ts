import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import {
  AuthStatus,
  User,
  LoginResponse,
} from '../app/auth/interfaces/auth.interfaces';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.base_url;

  constructor(private http: HttpClient) {}

  private _currentUser = signal<User | null>({ name: 'pepe2' });
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! exponiendo data fuera del servicio
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((user) => {
          this._currentUser.set(user.user);
          this._authStatus.set(AuthStatus.authenticated);
          localStorage.setItem('token', user.token);
        }),
        catchError((error) => {
          console.error('Error en autenticación:', error);
          this._currentUser.set(null);
          this._authStatus.set(AuthStatus.notAuthenticated);
          return throwError(() => 'Credenciales incorrectas');
        })
      );
  }
}
