import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validadores customizados para formulário de inscrição
 */
export class FormValidators {

  /**
   * Valida CPF brasileiro
   * Verifica dígitos verificadores e formato
   */
  static cpf(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value?.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (!cpf) {
      return null; // Campo vazio (required cuida disso)
    }

    // CPF deve ter 11 dígitos
    if (cpf.length !== 11) {
      return { cpfInvalido: { message: 'CPF deve ter 11 dígitos' } };
    }

    // Verifica CPFs conhecidos como inválidos (todos dígitos iguais)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return { cpfInvalido: { message: 'CPF inválido' } };
    }

    // Valida primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
      return { cpfInvalido: { message: 'CPF inválido' } };
    }

    // Valida segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
      return { cpfInvalido: { message: 'CPF inválido' } };
    }

    return null; // CPF válido
  }

  /**
   * Valida celular brasileiro (DDD + 9 dígitos)
   * Formato esperado: (XX) 9XXXX-XXXX ou 11 dígitos sem formatação
   */
  static celularBrasil(control: AbstractControl): ValidationErrors | null {
    const celular = control.value?.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (!celular) {
      return null; // Campo vazio (required cuida disso)
    }

    // Deve ter exatamente 11 dígitos (2 DDD + 9 número)
    if (celular.length !== 11) {
      return { celularInvalido: { message: 'Celular deve ter 11 dígitos (DDD + número)' } };
    }

    // Primeiro dígito do número deve ser 9
    if (celular.charAt(2) !== '9') {
      return { celularInvalido: { message: 'Celular deve começar com 9 após o DDD' } };
    }

    // Valida DDD válido (11 a 99, excluindo alguns inválidos)
    const ddd = parseInt(celular.substring(0, 2));
    const dddsValidos = [
      11, 12, 13, 14, 15, 16, 17, 18, 19, // São Paulo
      21, 22, 24, // Rio de Janeiro
      27, 28, // Espírito Santo
      31, 32, 33, 34, 35, 37, 38, // Minas Gerais
      41, 42, 43, 44, 45, 46, // Paraná
      47, 48, 49, // Santa Catarina
      51, 53, 54, 55, // Rio Grande do Sul
      61, // Distrito Federal
      62, 64, // Goiás
      63, // Tocantins
      65, 66, // Mato Grosso
      67, // Mato Grosso do Sul
      68, // Acre
      69, // Rondônia
      71, 73, 74, 75, 77, // Bahia
      79, // Sergipe
      81, 87, // Pernambuco
      82, // Alagoas
      83, // Paraíba
      84, // Rio Grande do Norte
      85, 88, // Ceará
      86, 89, // Piauí
      91, 93, 94, // Pará
      92, 97, // Amazonas
      95, // Roraima
      96, // Amapá
      98, 99, // Maranhão
    ];

    if (!dddsValidos.includes(ddd)) {
      return { celularInvalido: { message: 'DDD inválido' } };
    }

    return null; // Celular válido
  }

  /**
   * Valida email com domínio obrigatório
   * Garante formato válido e presença de domínio (.com, .br, etc)
   */
  static emailComDominio(control: AbstractControl): ValidationErrors | null {
    const email = control.value;

    if (!email) {
      return null; // Campo vazio (required cuida disso)
    }

    // Regex completo para email válido com domínio
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return { emailInvalido: { message: 'Email deve conter @ e domínio válido (.com, .br, etc)' } };
    }

    // Verifica tamanho máximo (254 caracteres é o limite RFC)
    if (email.length > 100) {
      return { emailInvalido: { message: 'Email muito longo (máximo 100 caracteres)' } };
    }

    return null; // Email válido
  }

  /**
   * Valida nome completo (mínimo 2 palavras)
   */
  static nomeCompleto(control: AbstractControl): ValidationErrors | null {
    const nome = control.value?.trim();

    if (!nome) {
      return null; // Campo vazio (required cuida disso)
    }

    // Verifica se tem pelo menos 2 palavras (nome e sobrenome)
    const palavras = nome.split(/\s+/).filter((p: string) => p.length > 0);
    if (palavras.length < 2) {
      return { nomeInvalido: { message: 'Digite nome e sobrenome' } };
    }

    // Verifica tamanho mínimo de cada palavra
    const temPalavraMuitoCurta = palavras.some((p: string) => p.length < 2);
    if (temPalavraMuitoCurta) {
      return { nomeInvalido: { message: 'Nome e sobrenome devem ter pelo menos 2 letras' } };
    }

    return null; // Nome válido
  }
}
