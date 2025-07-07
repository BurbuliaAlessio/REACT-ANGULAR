import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  private API_URL = 'http://localhost:3000';

  //* chiamata GET con paginazione
  getContacts(
    page: number,
    limit: number
  ): Observable<{ data: Contact[]; total: number }> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http
      .get<Contact[]>(`${this.API_URL}/contacts`, {
        params,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          // Se l'header X-Total-Count non è presente, usa la lunghezza dell'array
          const total =
            Number(response.headers.get('X-Total-Count')) ||
            response.body?.length ||
            0;
          return {
            data: response.body || [],
            total,
          };
        })
      );
  }

  //* chiamata DELETE con paginazione
  deleteContact(id: number) {
    return this.http.delete(`${this.API_URL}/contacts/${id}`);
  }
}
