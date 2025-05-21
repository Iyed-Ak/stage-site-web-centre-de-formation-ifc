import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://localhost:3000/inscriptions'; // JSON Server URL

  constructor(private http: HttpClient) {}

  sendInscription(data: any): Observable<any> {
    // Ajouter la date actuelle à l'objet d'inscription
    const inscriptionData = {
      ...data,
      date: new Date().toISOString()  // Ajouter la date actuelle en format ISO
    };

    return this.http.post(this.apiUrl, inscriptionData);
  }
}
