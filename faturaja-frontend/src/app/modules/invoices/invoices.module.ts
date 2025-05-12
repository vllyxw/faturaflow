import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceImportComponent } from './components/invoice-import/invoice-import.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceAuditComponent } from './components/invoice-audit/invoice-audit.component';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceImportComponent,
    InvoiceDetailComponent,
    InvoiceAuditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: InvoiceListComponent },
      { path: 'import', component: InvoiceImportComponent },
      { path: ':id', component: InvoiceDetailComponent },
      { path: ':id/audit', component: InvoiceAuditComponent }
    ]),
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    CardModule,
    TagModule,
    ProgressSpinnerModule,
    ToastModule,
    TooltipModule
  ],
  providers: [InvoiceService]
})
export class InvoicesModule { }