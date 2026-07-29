import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CxFormRequest, CxFormResponse } from '../models/cx-form.model';

/**
 * Mock Service para testes da API cx_form
 * Simula respostas da API sem fazer requisições reais
 */
@Injectable({
  providedIn: 'root'
})
export class CxFormMockService {

  /**
   * Simula criação de formulário com delay de 1 segundo
   * @param data Dados do formulário
   * @returns Observable<CxFormResponse>
   */
  createForm(data: CxFormRequest): Observable<CxFormResponse> {
    console.log('🧪 [MOCK] Dados recebidos:', data);

    // Simular sucesso SEMPRE (sem validações extras)
    const mockResponse: CxFormResponse = {
      success: true,
      data: {
        id: Math.random().toString(36).substring(7),
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        event_name: data.event_name,
        created_at: new Date().toISOString()
      }
    };

    console.log('✅ [MOCK] Resposta simulada:', mockResponse);

    return of(mockResponse).pipe(delay(500)); // Simula latência de 500ms
  }
}
