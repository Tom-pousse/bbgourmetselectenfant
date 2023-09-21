import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enfant } from '../models/enfant';
import { Observable } from 'rxjs';
import { UpdateEnfant } from '../models/updateEnfant';
import { Restriction } from '../models/restriction';

@Injectable({
  providedIn: 'root',
})
export class EnfantService {
  constructor(private http: HttpClient) {}
  setHeaders() {
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  enfantById(enfantId: number): Observable<Enfant> {
    const headers = this.setHeaders();

    return this.http.get<Enfant>(
      `http://localhost:3000/api/enfants/${enfantId}`,

      {
        headers,
      }
    );
  }

  updateEnfant(enfant: Enfant): Observable<Enfant> {
    const headers = this.setHeaders();
    return this.http.patch<Enfant>(
      `http://localhost:3000/api/enfants/${enfant.id}`,
      enfant,
      {
        headers,
      }
    );
  }
}
