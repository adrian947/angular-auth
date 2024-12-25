export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  _id?: string;
  email?: string;
  name: string;
  isActive?: boolean;
  roles?: string[];
  __v?: number;
}

export enum AuthStatus {
  checking = 'checking',
  authenticated = ' authenticated',
  notAuthenticated = 'notAuthenticated',
}
