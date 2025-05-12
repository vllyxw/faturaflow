import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

import { RiskDashboardComponent } from './components/risk-dashboard/risk-dashboard.component';
import { RiskAnalysisService } from './services/risk-analysis.service';

@NgModule({
  declarations: [RiskDashboardComponent],
  imports: [
    CommonModule,
    ChartModule,
    CardModule,
    RouterModule.forChild([
      { path: '', component: RiskDashboardComponent }
    ])
  ],
  providers: [RiskAnalysisService]
})
export class RiskAnalysisModule { }