import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactoringService {
  private apiUrl = `${environment.apiUrl}/factoring`;

  constructor(private http: HttpClient) { }

  createRequest(invoiceIds: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/requests`, { invoiceIds });
  }

  simulate(request: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/simulate`, request);
  }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requests`);
  }
}