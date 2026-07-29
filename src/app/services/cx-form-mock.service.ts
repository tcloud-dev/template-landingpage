import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
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

    // Simular validação de CPF inválido
    if (data.cpf === '000.000.000-00' || data.cpf === '00000000000') {
      return throwError(() => ({
        error: { message: 'CPF inválido' },
        status: 422
      })).pipe(delay(500));
    }

    // Simular sucesso
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

    return of(mockResponse).pipe(delay(1000)); // Simula latência de rede
  }

  /**
   * Simula listagem de formulários
   * @returns Observable<CxFormResponse>
   */
  listForms(): Observable<CxFormResponse> {
    const mockResponse: CxFormResponse = {
      success: true,
      data: [
        {
          id: 'abc123',
          customer_name: 'João Silva',
          customer_email: 'joao@example.com',
          event_name: 'Tech Summit 2026'
        },
        {
          id: 'def456',
          customer_name: 'Maria Santos',
          customer_email: 'maria@example.com',
          event_name: 'Tech Summit 2026'
        }
      ]
    };

    return of(mockResponse).pipe(delay(800));
  }
}
