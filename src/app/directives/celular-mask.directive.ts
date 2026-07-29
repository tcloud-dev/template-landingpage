import { Directive, HostListener, ElementRef } from '@angular/core';

/**
 * Diretiva para aplicar máscara de celular brasileiro (00) 00000-0000
 * Uso: <input appCelularMask>
 */
@Directive({
  selector: '[appCelularMask]',
  standalone: true
})
export class CelularMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Limita a 11 dígitos
    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    // Aplica a máscara
    value = this.applyMask(value);

    input.value = value;
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 0 && value.length < 11) {
      // Se o celular estiver incompleto, mantém apenas os números
      input.value = value;
    }
  }

  private applyMask(value: string): string {
    if (value.length === 0) {
      return '';
    } else if (value.length <= 2) {
      return `(${value}`;
    } else if (value.length <= 7) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
  }
}
