import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice, InvoiceFilter, InvoicePage } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  providers: [MessageService]
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  totalRecords = 0;
  loading = true;
  statuses = [
    { label: 'Todas', value: null },
    { label: 'Pendente', value: 'PENDING_VALIDATION' },
    { label: 'Válida', value: 'VALID' },
    { label: 'Inválida', value: 'INVALID' },
    { label: 'Processando', value: 'PROCESSING' },
    { label: 'Bloqueada', value: 'BLOCKED' },
    { label: 'Antecipada', value: 'ANTICIPATED' }
  ];
  types = [
    { label: 'Todos', value: null },
    { label: 'Entrada', value: 'ENTRADA' },
    { label: 'Saída', value: 'SAIDA' }
  ];
  filter: InvoiceFilter = {
    page: 0,
    size: 10
  };

  constructor(
    private invoiceService: InvoiceService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(event?: LazyLoadEvent): void {
    this.loading = true;

    if (event) {
      this.filter.page = event.first! / event.rows!;
      this.filter.size = event.rows;
    }

    this.invoiceService.getInvoices(this.filter).subscribe({
      next: (page: InvoicePage) => {
        this.invoices = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Falha ao carregar notas fiscais'
        });
        this.loading = false;
      }
    });
  }

  onFilterChange(): void {
    this.filter.page = 0;
    this.loadInvoices();
  }

  getStatusSeverity(status: string): string {
    switch (status) {
      case 'VALID':
        return 'success';
      case 'INVALID':
        return 'danger';
      case 'PENDING_VALIDATION':
      case 'PROCESSING':
        return 'warning';
      case 'BLOCKED':
        return 'danger';
      case 'ANTICIPATED':
        return 'info';
      default:
        return '';
    }
  }
}