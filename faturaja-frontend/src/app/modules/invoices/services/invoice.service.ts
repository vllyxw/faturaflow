import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './././environments/environment';
import { 
  Invoice, 
  InvoiceAudit, 
  InvoiceFilter, 
  InvoiceImportRequest,
  InvoicePage 
} from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = `${environment.apiUrl}/invoices`;

  constructor(private http: HttpClient) { }

  getInvoices(filter: InvoiceFilter): Observable<InvoicePage> {
    let params = new HttpParams();

    if (filter.companyId) {
      params = params.append('companyId', filter.companyId);
    }

    if (filter.status) {
      params = params.append('status', filter.status);
    }

    if (filter.type) {
      params = params.append('type', filter.type);
    }

    if (filter.startDate) {
      params = params.append('startDate', filter.startDate.toISOString());
    }

    if (filter.endDate) {
      params = params.append('endDate', filter.endDate.toISOString());
    }

    if (filter.page) {
      params = params.append('page', filter.page.toString());
    }

    if (filter.size) {
      params = params.append('size', filter.size.toString());
    }

    return this.http.get<InvoicePage>(this.apiUrl, { params });
  }

  getInvoiceById(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}/${id}`);
  }

  importInvoice(request: InvoiceImportRequest): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.apiUrl}/import`, request);
  }

  importInvoicesBatch(requests: InvoiceImportRequest[]): Observable<Invoice[]> {
    return this.http.post<Invoice[]>(`${this.apiUrl}/import/batch`, requests);
  }

  getInvoiceAuditLogs(invoiceId: string): Observable<InvoiceAudit[]> {
    return this.http.get<InvoiceAudit[]>(`${this.apiUrl}/${invoiceId}/audit`);
  }
}