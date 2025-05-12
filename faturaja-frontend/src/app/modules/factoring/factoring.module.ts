import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { FactoringListComponent } from './components/factoring-list/factoring-list.component';
import { FactoringRequestComponent } from './components/factoring-request/factoring-request.component';
import { FactoringSimulationComponent } from './components/factoring-simulation/factoring-simulation.component';
import { FactoringService } from './services/factoring.service';

@NgModule({
  declarations: [
    FactoringListComponent,
    FactoringRequestComponent,
    FactoringSimulationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: FactoringListComponent },
      { path: 'new', component: FactoringRequestComponent },
      { path: 'simulate', component: FactoringSimulationComponent }
    ]),
    CardModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [FactoringService]
})
export class FactoringModule { }