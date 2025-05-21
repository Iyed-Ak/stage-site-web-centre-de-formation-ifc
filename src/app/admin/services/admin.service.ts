// admin/services/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private formationsUrl = 'http://localhost:3000/formations';
  private inscriptionsUrl = 'http://localhost:3000/inscriptions';

  constructor(private http: HttpClient) {}

  // Formations CRUD
  getAllFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.formationsUrl);
  }

  getFormationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.formationsUrl}/${id}`);
  }

  addFormation(formation: any): Observable<any> {
    return this.http.post<any>(this.formationsUrl, formation);
  }

  updateFormation(id: string, formation: any): Observable<any> {
    return this.http.put<any>(`${this.formationsUrl}/${id}`, formation);
  }

  deleteFormation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.formationsUrl}/${id}`);
  }

  // Inscriptions CRUD
  getAllInscriptions(): Observable<any[]> {
    return this.http.get<any[]>(this.inscriptionsUrl);
  }

  getInscriptionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.inscriptionsUrl}/${id}`);
  }

  updateInscription(id: string, inscription: any): Observable<any> {
    return this.http.put<any>(`${this.inscriptionsUrl}/${id}`, inscription);
  }

  deleteInscription(id: string): Observable<any> {
    return this.http.delete<any>(`${this.inscriptionsUrl}/${id}`);
  }

  // Statistiques
  getStats(): Observable<any> {
    return forkJoin({
      formations: this.getAllFormations(),
      inscriptions: this.getAllInscriptions()
    }).pipe(
      map(results => ({
        totalFormations: results.formations.length,
        totalInscriptions: results.inscriptions.length,
        // Vous pourriez ajouter d'autres statistiques ici
      }))
    );
  }
}