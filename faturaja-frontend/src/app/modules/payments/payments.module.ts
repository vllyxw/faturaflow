import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    RouterModule.forChild([
      { path: '', component: PaymentListComponent },
      { path: ':id', component: PaymentDetailComponent }
    ])
  ],
  providers: [PaymentService]
})
export class PaymentsModule { }