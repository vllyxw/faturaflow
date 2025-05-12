import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceImportRequest } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice-import',
  templateUrl: './invoice-import.component.html',
  styleUrls: ['./invoice-import.component.scss'],
  providers: [MessageService]
})
export class InvoiceImportComponent implements OnInit {
  uploadedFiles: any[] = [];
  loading = false;
  companyId = '123'; // ID da empresa logada
  userId = 'user123'; // ID do usuário logado

  constructor(
    private invoiceService: InvoiceService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpload(event: any): void {
    this.loading = true;
    const files = event.files;
    const requests: InvoiceImportRequest[] = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        requests.push({
          companyId: this.companyId,
          xmlContent: content,
          importedBy: this.userId
        });

        if (requests.length === files.length) {
          this.processImport(requests);
        }
      };
      reader.readAsText(file);
    }
  }

  private processImport(requests: InvoiceImportRequest[]): void {
    if (requests.length === 1) {
      this.invoiceService.importInvoice(requests[0]).subscribe({
        next: (invoice) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Nota fiscal importada com sucesso'
          });
          this.router.navigate(['/invoices', invoice.id]);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Falha ao importar nota fiscal'
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          this.uploadedFiles = [];
        }
      });
    } else {
      this.invoiceService.importInvoicesBatch(requests).subscribe({
        next: (invoices) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: `${invoices.length} notas fiscais importadas com sucesso`
          });
          this.router.navigate(['/invoices']);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Falha ao importar notas fiscais'
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          this.uploadedFiles = [];
        }
      });
    }
  }
}