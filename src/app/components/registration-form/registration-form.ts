import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CxFormMockService } from '../../services/cx-form-mock.service';
// import { CxFormService } from '../../services/cx-form.service'; // Descomentar quando API estiver pronta
import { CxFormRequest } from '../../models/cx-form.model';

@Component({
  selector: 'app-registration-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {

  // Configuração do evento (fixo para esta landing page)
  private readonly EVENT_CONFIG = {
    event_id: 'EVT-2026-001',           // TODO: Configurar ID real do evento
    event_name: 'Tech Summit 2026',     // TODO: Configurar nome real do evento
    event_date: '2026-08-15'            // TODO: Configurar data real do evento
  };

  formData = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    cpf: '',
    empresa: ''
  };

  submitted = false;
  error = '';
  isSubmitting = false;

  constructor(
    private cxFormMockService: CxFormMockService
    // private cxFormService: CxFormService // Descomentar quando API estiver pronta
  ) {}

  onSubmit(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.error = '';

    // Mapeia dados do formulário para o formato da API
    const apiPayload: CxFormRequest = {
      event_id: this.EVENT_CONFIG.event_id,
      event_name: this.EVENT_CONFIG.event_name,
      event_date: this.EVENT_CONFIG.event_date,
      customer_name: this.formData.nomeCompleto,
      customer_email: this.formData.email,
      phone_number: this.formData.telefone,
      cpf: this.formData.cpf,
      company_name: this.formData.empresa || undefined // Remove se vazio
    };

    console.log('📤 Enviando inscrição:', apiPayload);

    // Usando MOCK para testes
    this.cxFormMockService.createForm(apiPayload).subscribe({
      next: (response) => {
        console.log('✅ Inscrição realizada:', response);
        this.submitted = true;
        this.isSubmitting = false;

        // Reseta formulário após 3 segundos
        setTimeout(() => {
          this.submitted = false;
          this.resetForm();
        }, 3000);
      },
      error: (err) => {
        console.error('❌ Erro na inscrição:', err);
        this.error = err.error?.message || 'Erro ao processar inscrição. Tente novamente.';
        this.isSubmitting = false;
      }
    });

    // Quando API estiver pronta, trocar para:
    // this.cxFormService.createForm(apiPayload).subscribe({ ... });
  }

  clearError(): void {
    this.error = '';
  }

  resetForm(): void {
    this.formData = {
      nomeCompleto: '',
      email: '',
      telefone: '',
      cpf: '',
      empresa: ''
    };
  }
}
