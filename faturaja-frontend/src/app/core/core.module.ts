import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Importe os serviços
import { AuthService } from './auth/auth.service';
import { NotificationService } from './services/notification.service';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    NotificationService,
    ApiService
  ]
})
export class CoreModule { }