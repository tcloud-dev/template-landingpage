import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {
  formData = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    cpf: '',
    empresa: '',
    cargo: '',
    area: '',
    observacao: ''
  };

  submitted = false;

  onSubmit(): void {
    console.log('Dados do formulário:', this.formData);
    this.submitted = true;

    // Aqui você pode adicionar a lógica para enviar os dados para um backend
    setTimeout(() => {
      this.submitted = false;
      this.resetForm();
    }, 3000);
  }

  resetForm(): void {
    this.formData = {
      nomeCompleto: '',
      email: '',
      telefone: '',
      cpf: '',
      empresa: '',
      cargo: '',
      area: '',
      observacao: ''
    };
  }
}
