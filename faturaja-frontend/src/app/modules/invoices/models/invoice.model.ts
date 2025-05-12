export interface Invoice {
  id: string;
  companyId: string;
  accessKey: string;
  issuerTaxId: string;
  issuerName: string;
  recipientTaxId: string;
  recipientName: string;
  amount: number;
  emissionDate: Date;
  dueDate: Date;
  status: 'PENDING_VALIDATION' | 'VALID' | 'INVALID' | 'PROCESSING' | 'BLOCKED' | 'ANTICIPATED';
  type: 'ENTRADA' | 'SAIDA';
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceAudit {
  id: number;
  invoiceId: string;
  action: string;
  performedBy: string;
  details: string;
  timestamp: Date;
}

export interface InvoiceImportRequest {
  companyId: string;
  xmlContent: string;
  importedBy: string;
}

export interface InvoiceFilter {
  companyId?: string;
  status?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  page?: number;
  size?: number;
}

export interface InvoicePage {
  content: Invoice[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}