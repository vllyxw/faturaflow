import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate'
})
export class StatusTranslatePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'PENDING_VALIDATION':
        return 'Pendente';
      case 'VALID':
        return 'Válida';
      case 'INVALID':
        return 'Inválida';
      case 'PROCESSING':
        return 'Processando';
      case 'BLOCKED':
        return 'Bloqueada';
      case 'ANTICIPATED':
        return 'Antecipada';
      default:
        return value;
    }
  }
}