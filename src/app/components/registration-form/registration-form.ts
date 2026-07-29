import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CxFormMockService } from '../../services/cx-form-mock.service';
// import { CxFormService } from '../../services/cx-form.service'; // Descomentar quando API estiver pronta
import { CxFormRequest } from '../../models/cx-form.model';
import { FormValidators } from '../../validators/form-validators';
import { CpfMaskDirective } from '../../directives/cpf-mask.directive';
import { CelularMaskDirective } from '../../directives/celular-mask.directive';

@Component({
  selector: 'app-registration-form',
  imports: [CommonModule, ReactiveFormsModule, CpfMaskDirective, CelularMaskDirective],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm implements OnInit {

  // Configuração do evento (fixo para esta landing page)
  private readonly EVENT_CONFIG = {
    event_id: 'EVT-2026-001',           // TODO: Configurar ID real do evento
    event_name: 'Tech Summit 2026',     // TODO: Configurar nome real do evento
    event_date: '2026-08-15'            // TODO: Configurar data real do evento
  };

  registrationForm!: FormGroup;
  submitted = false;
  error = '';
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private cxFormMockService: CxFormMockService,
    private cdr: ChangeDetectorRef
    // private cxFormService: CxFormService // Descomentar quando API estiver pronta
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nomeCompleto: ['', [
        Validators.required,
        Validators.maxLength(40),
        FormValidators.nomeCompleto
      ]],
      email: ['', [
        Validators.required,
        FormValidators.emailComDominio
      ]],
      telefone: ['', [
        Validators.required,
        FormValidators.celularBrasil
      ]],
      cpf: ['', [
        Validators.required,
        FormValidators.cpf
      ]],
      empresa: ['', [
        Validators.required,
        Validators.maxLength(60)
      ]]
    });
  }

  /**
   * Getter para facilitar acesso aos controles do formulário
   */
  get f() {
    return this.registrationForm.controls;
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

    if (this.registrationForm.invalid || this.isSubmitting) {
      console.log('⚠️ Formulário inválido', this.registrationForm.errors);
      return;
    }

    this.isSubmitting = true;
    this.error = '';

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

    // Usando MOCK para testes
    this.cxFormMockService.createForm(apiPayload).subscribe({
      next: (response) => {
        console.log('✅ Inscrição realizada:', response);
        console.log('🎉 Setando submitted = true');
        this.submitted = true;
        this.isSubmitting = false;
        this.cdr.detectChanges(); // Força detecção de mudanças
        console.log('📊 Estado atual - submitted:', this.submitted, 'isSubmitting:', this.isSubmitting);

        // Reseta formulário após 3 segundos
        setTimeout(() => {
          console.log('⏱️ Resetando formulário após 3 segundos');
          this.submitted = false;
          this.registrationForm.reset();
          this.cdr.detectChanges();
        }, 3000);
      },
      error: (err) => {
        console.error('❌ Erro na inscrição:', err);
        this.error = err.error?.message || 'Erro ao processar inscrição. Tente novamente.';
        this.isSubmitting = false;
        this.cdr.detectChanges();
      }
    });

    // Quando API estiver pronta, trocar para:
    // this.cxFormService.createForm(apiPayload).subscribe({ ... });
  }

  clearError(): void {
    this.error = '';
  }
}
