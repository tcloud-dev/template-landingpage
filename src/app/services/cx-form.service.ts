import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CxFormRequest, CxFormResponse } from '../models/cx-form.model';

/**
 * Service para consumir API cx_form (produção)
 * Base URL: https://api-service-hub.tcloud.cloudtotvs.com.br/dev
 *
 * NOTA: Esta API é PÚBLICA para permitir cadastros em landing pages
 */
@Injectable({
  providedIn: 'root'
})
export class CxFormService {

  private readonly API_BASE_URL = 'https://api-service-hub.tcloud.cloudtotvs.com.br/dev';
  private readonly ENDPOINT = '/cx-forms';

  constructor(private http: HttpClient) {}

  /**
   * POST /cx-forms
   * Cria novo formulário de evento/inscrição
   * @param data Dados do formulário
   * @returns Observable<CxFormResponse>
   */
  createForm(data: CxFormRequest): Observable<CxFormResponse> {
    const url = `${this.API_BASE_URL}${this.ENDPOINT}`;

    return this.http.post<CxFormResponse>(url, data, {
      headers: this.getHeaders()
    });
  }

  /**
   * Monta os headers HTTP básicos para a API
   * @returns HttpHeaders
   */
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}
