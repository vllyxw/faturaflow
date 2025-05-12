import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Módulos de funcionalidades
import { InvoicesModule } from './modules/invoices/invoices.module';
import { FactoringModule } from './modules/factoring/factoring.module';
import { RiskAnalysisModule } from './modules/risk-analysis/risk-analysis.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Módulos compartilhados
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    InvoicesModule,
    FactoringModule,
    RiskAnalysisModule,
    PaymentsModule,
    CompaniesModule,
    DashboardModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }