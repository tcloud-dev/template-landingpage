/**
 * Interface para requisição de criação de formulário
 * Campos event_id, event_name e event_date são geralmente fixos para uma landing page específica
 */
export interface CxFormRequest {
  event_id: string;        // ID do evento (fixo por landing page)
  event_name: string;      // Nome do evento (fixo por landing page)
  event_date: string;      // Data do evento (fixo por landing page)
  customer_name: string;   // Nome completo do participante
  cpf: string;             // CPF do participante
  company_name?: string;   // Empresa (OPCIONAL)
  customer_email: string;  // E-mail do participante
  phone_number: string;    // Celular do participante
}

/**
 * Interface para resposta de sucesso da API
 */
export interface CxFormResponse {
  success: boolean;
  data: any;
}

/**
 * Interface para resposta de erro da API
 */
export interface CxFormErrorResponse {
  message: string;
}

/**
 * Interface para item de listagem (GET)
 * TODO: Ajustar quando souber a estrutura real do data
 */
export interface CxFormListItem {
  // Adicionar campos quando souber a estrutura retornada pelo GET
  [key: string]: any;
}
