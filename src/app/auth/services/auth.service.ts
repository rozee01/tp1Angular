import { Injectable, inject, signal } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { Observable } from 'rxjs';
import { CONSTANTES } from 'src/config/const.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  isAuthenticated = signal(false);
  userId = signal<number | null>(null);
  userEmail = signal<string | null>(null);
  constructor() {
    this.loadUserState();
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  // isAuthenticated(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  logout() {
    localStorage.removeItem(CONSTANTES.token);
    localStorage.removeItem(CONSTANTES.userId);
    localStorage.removeItem(CONSTANTES.userEmail);
    this.isAuthenticated.set(false);
    this.userId.set(null);
    this.userEmail.set(null);
  }
  private loadUserState() {
    const token = localStorage.getItem(CONSTANTES.token);
    const userId = localStorage.getItem(CONSTANTES.userId);
    const userEmail = localStorage.getItem(CONSTANTES.userEmail);

    if (token && userId && userEmail) {
      this.isAuthenticated.set(true);
      this.userId.set(Number(userId));
      this.userEmail.set(userEmail);
    }
  }
}
