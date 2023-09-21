import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enfant } from '../models/enfant';
import { Observable } from 'rxjs';

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

  addEnfant(enfant: Enfant): Observable<Enfant> {
    console.log(enfant);
    const headers = this.setHeaders();
    console.log(enfant);

    return this.http.post<Enfant>(`http://localhost:3000/api/enfants`, enfant, {
      headers,
    });
  }
}
