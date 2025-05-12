import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate'
})
export class StatusTranslatePipe implements PipeTransform {
  transform(value: string): string {
    const statusMap: {[key: string]: string} = {
      'PENDING_VALIDATION': 'Pendente',
      'VALID': 'Válida',
      'INVALID': 'Inválida',
      'PROCESSING': 'Processando',
      'BLOCKED': 'Bloqueada',
      'ANTICIPATED': 'Antecipada'
    };
    return statusMap[value] || value;
  }
}