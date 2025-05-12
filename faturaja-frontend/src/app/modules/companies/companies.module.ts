import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: CompanyListComponent },
      { path: 'new', component: CompanyFormComponent },
      { path: ':id/edit', component: CompanyFormComponent }
    ])
  ],
  providers: [CompanyService]
})
export class CompaniesModule { }