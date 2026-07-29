import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CxFormMockService } from '../../services/cx-form-mock.service';
import { CxFormRequest } from '../../models/cx-form.model';
import { FormValidators } from '../../validators/form-validators';
import { CpfMaskDirective } from '../../directives/cpf-mask.directive';
import { CelularMaskDirective } from '../../directives/celular-mask.directive';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ReactiveFormsModule, CpfMaskDirective, CelularMaskDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  // Configuração do evento
  private readonly EVENT_CONFIG = {
    event_id: 'EVT-2026-TCLOUD-IA',
    event_name: 'T-Cloud + IA: Customer Day',
    event_date: '2026-08-26'
  };

  registrationForm!: FormGroup;
  submitted = signal(false);
  error = signal('');
  isSubmitting = signal(false);

  constructor(
    private fb: FormBuilder,
    private cxFormMockService: CxFormMockService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      cpf: ['', [
        Validators.required,
        FormValidators.cpf
      ]],
      nomeCompleto: ['', [
        Validators.required,
        Validators.maxLength(30),
        FormValidators.nomeCompleto
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(30),
        FormValidators.emailComDominio
      ]],
      telefone: ['', [
        Validators.required,
        FormValidators.celularBrasil
      ]],
      empresa: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
  }

  /**
   * Verifica se um campo tem erro e foi tocado
   */
  hasError(field: string): boolean {
    const control = this.registrationForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  /**
   * Retorna mensagem de erro para um campo
   */
  getErrorMessage(field: string): string {
    const control = this.registrationForm.get(field);
    if (!control || !control.errors) return '';

    const errors = control.errors;

    // Erros customizados
    if (errors['cpfInvalido']) return errors['cpfInvalido'].message;
    if (errors['celularInvalido']) return errors['celularInvalido'].message;
    if (errors['emailInvalido']) return errors['emailInvalido'].message;
    if (errors['nomeInvalido']) return errors['nomeInvalido'].message;

    // Erros padrão
    if (errors['required']) return 'Campo obrigatório';
    if (errors['maxlength']) return `Máximo de ${errors['maxlength'].requiredLength} caracteres`;
    if (errors['email']) return 'Email inválido';

    return 'Campo inválido';
  }

  onSubmit(): void {
    // Marca todos os campos como touched para mostrar erros
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.get(key)?.markAsTouched();
    });

    if (this.registrationForm.invalid || this.isSubmitting()) {
      console.log('⚠️ Formulário inválido', this.registrationForm.errors);
      return;
    }

    this.isSubmitting.set(true);
    this.error.set('');

    const formValue = this.registrationForm.value;

    // Remove máscaras antes de enviar
    const cleanCpf = formValue.cpf?.replace(/\D/g, '') || '';
    const cleanTelefone = formValue.telefone?.replace(/\D/g, '') || '';

    // Mapeia dados do formulário para o formato da API
    const apiPayload: CxFormRequest = {
      event_id: this.EVENT_CONFIG.event_id,
      event_name: this.EVENT_CONFIG.event_name,
      event_date: this.EVENT_CONFIG.event_date,
      customer_name: formValue.nomeCompleto,
      customer_email: formValue.email,
      phone_number: cleanTelefone,
      cpf: cleanCpf,
      company_name: formValue.empresa
    };

    console.log('📤 Enviando inscrição:', apiPayload);

    this.cxFormMockService.createForm(apiPayload).subscribe({
      next: (response) => {
        console.log('✅ Inscrição realizada com sucesso!');
        this.submitted.set(true);
        this.isSubmitting.set(false);

        // Reset automático após 5 segundos
        setTimeout(() => {
          this.submitted.set(false);
          this.registrationForm.reset();
        }, 5000);
      },
      error: (err) => {
        console.error('❌ Erro na inscrição:', err);
        this.error.set(err.error?.message || 'Erro ao processar inscrição. Tente novamente.');
        this.isSubmitting.set(false);
      }
    });
  }

  clearError(): void {
    this.error.set('');
  }
}
