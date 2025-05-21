// src/app/admin/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'admin_auth_token';
  
  constructor() {}
  
  login(email: string, password: string): boolean {
    // Remplacez ces valeurs par vos identifiants souhaités
    const validEmail = 'admin@formation.com';
    const validPassword = 'admin123';
    
    if (email === validEmail && password === validPassword) {
      // En production, utilisez un token JWT ou une autre méthode sécurisée
      const token = btoa(email + ':' + new Date().getTime());
      localStorage.setItem(this.tokenKey, token);
      return true;
    }
    return false;
  }
  
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
  
  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }
}