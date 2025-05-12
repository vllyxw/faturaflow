import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'invoices', 
    loadChildren: () => import('./modules/invoices/invoices.module').then(m => m.InvoicesModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'factoring', 
    loadChildren: () => import('./modules/factoring/factoring.module').then(m => m.FactoringModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'risk', 
    loadChildren: () => import('./modules/risk-analysis/risk-analysis.module').then(m => m.RiskAnalysisModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'payments', 
    loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'companies', 
    loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard] 
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }