# Documentação de desenvolvimento — cx_form

**Módulo:** `cx_form`  
**Fonte:** local (working tree)  
**Gerado em:** 14/07/2026 14:19

## O que foi implementado

Implementação do módulo serverless `cx_form` com 2 endpoint(s) HTTP (GET, POST), extraído de `routes.yml` e handlers Python. Fonte analisada: local (working tree).

- Endpoint `GET /cx-forms`: Handler `cx_form_list.py` implementa `GET /cx-forms` como API serverless no T-Cloud.
Feature ID registrada no código: `1…
- Endpoint `POST /cx-forms`: Handler `cx_form_create.py` implementa `POST /cx-forms` como API serverless no T-Cloud.
Feature ID registrada no código:…

## Endpoints desenvolvidos

## Endpoint 1 de 2 — Cx Form List

| Item | Valor |
|------|-------|
| **Lambda** | `cx_form_list` |
| **Handler** | `cx_form_list.py` |
| **Método** | `GET` |
| **Rota** | `/cx-forms` |
| **Schema** | `SchemaListCxForm` |
| **Feature ID** | `1073` |

#### O que foi implementado

Handler `cx_form_list.py` implementa `GET /cx-forms` como API serverless no T-Cloud.
Feature ID registrada no código: `1073`.
Contrato de entrada validado por `SchemaListCxForm` (Marshmallow).
Integrações e serviços: cx_form / cx_form.
Fluxo implementado:
1. Expõe `GET /cx-forms` como Lambda HTTP no API Gateway.
2. Valida entrada com schema Marshmallow `SchemaListCxForm` (`load_schema`).
3. Obtém dados do usuário autenticado a partir do token JWT.
4. Executa regra de negócio em `process(payload, user_info)`.
5. Retorna JSON com status 200 em caso de sucesso.
Tratamento de erros e segurança:
- Retorna HTTP 422 quando o payload não passa na validação Marshmallow.
- Erros de negócio encapsulados em `ErrorApp` com código HTTP específico.
- Exige usuário autenticado via token (email/perfil extraídos do evento).
- Respostas padronizadas via helper `http_response`.

#### Fluxo de execução

- Expõe `GET /cx-forms` como Lambda HTTP no API Gateway.
- Valida entrada com schema Marshmallow `SchemaListCxForm` (`load_schema`).
- Obtém dados do usuário autenticado a partir do token JWT.
- Executa regra de negócio em `process(payload, user_info)`.
- Retorna JSON com status 200 em caso de sucesso.

#### Serviços e integrações

- cx_form / cx_form

#### Contrato da API

**Rota de acesso:** `GET /cx-forms`  
**URL completa:** `https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms`  
**URL (template):** `https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms`  

**Exemplo de URL:**

```http
GET https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms
```

#### Path Parameters

Nenhum parâmetro de path.

#### Query Parameters

Nenhum query parameter.

#### Exemplo de resposta (200 OK)

```json
{
  "success": true,
  "data": {}
}
```

#### Tratamento de erros

- Retorna HTTP 422 quando o payload não passa na validação Marshmallow.
- Erros de negócio encapsulados em `ErrorApp` com código HTTP específico.
- Exige usuário autenticado via token (email/perfil extraídos do evento).
- Respostas padronizadas via helper `http_response`.

**Exemplo de erro:**

```json
{
  "message": "Requisição inválida. Verifique os parâmetros ou o body."
}
```

**Autenticação:** Bearer JWT (Cognito)

---

## Endpoint 2 de 2 — Cx Form Create

| Item | Valor |
|------|-------|
| **Lambda** | `cx_form_create` |
| **Handler** | `cx_form_create.py` |
| **Método** | `POST` |
| **Rota** | `/cx-forms` |
| **Schema** | `SchemaCreateCxForm` |
| **Feature ID** | `1073` |

#### O que foi implementado

Handler `cx_form_create.py` implementa `POST /cx-forms` como API serverless no T-Cloud.
Feature ID registrada no código: `1073`.
Contrato de entrada validado por `SchemaCreateCxForm` (Marshmallow).
Integrações e serviços: cx_form / cx_form.
Fluxo implementado:
1. Expõe `POST /cx-forms` como Lambda HTTP no API Gateway.
2. Valida entrada com schema Marshmallow `SchemaCreateCxForm` (`load_schema`).
3. Obtém dados do usuário autenticado a partir do token JWT.
4. Executa regra de negócio em `process(payload, user_info)`.
5. Retorna JSON com status 200 em caso de sucesso.
Tratamento de erros e segurança:
- Retorna HTTP 422 quando o payload não passa na validação Marshmallow.
- Erros de negócio encapsulados em `ErrorApp` com código HTTP específico.
- Exige usuário autenticado via token (email/perfil extraídos do evento).
- Respostas padronizadas via helper `http_response`.

#### Fluxo de execução

- Expõe `POST /cx-forms` como Lambda HTTP no API Gateway.
- Valida entrada com schema Marshmallow `SchemaCreateCxForm` (`load_schema`).
- Obtém dados do usuário autenticado a partir do token JWT.
- Executa regra de negócio em `process(payload, user_info)`.
- Retorna JSON com status 200 em caso de sucesso.

#### Serviços e integrações

- cx_form / cx_form

#### Contrato da API

**Rota de acesso:** `POST /cx-forms`  
**URL completa:** `https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms`  
**URL (template):** `https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms`  

**Exemplo de URL:**

```http
POST https://api-service-hub.tcloud.cloudtotvs.com.br/dev/cx-forms
```

#### Path Parameters

Nenhum parâmetro de path.

#### Query Parameters

Nenhum query parameter.

#### Body (JSON)

#### Campos do body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `event_id` | `string` | Sim | Campo `event_id` (string) — event_id. |
| `event_name` | `string` | Sim | Campo `event_name` (string) — event_name. |
| `event_date` | `string` | Sim | Campo `event_date` (string) — event_date. |
| `customer_name` | `string` | Sim | Campo `customer_name` (string) — customer_name. |
| `cpf` | `string` | Sim | Campo `cpf` (string) — cpf. |
| `company_name` | `string` | Não | Campo `company_name` (string) — company_name. |
| `customer_email` | `string` | Sim | Campo `customer_email` (string) — customer_email. |
| `phone_number` | `string` | Sim | Campo `phone_number` (string) — phone_number. |

**Exemplo de body:**

```json
{
  "event_id": "exemplo",
  "event_name": "exemplo",
  "event_date": "exemplo",
  "customer_name": "exemplo",
  "cpf": "exemplo",
  "company_name": "exemplo",
  "customer_email": "exemplo",
  "phone_number": "exemplo"
}
```

#### Exemplo de resposta (200 OK)

```json
{
  "success": true,
  "data": {}
}
```

#### Tratamento de erros

- Retorna HTTP 422 quando o payload não passa na validação Marshmallow.
- Erros de negócio encapsulados em `ErrorApp` com código HTTP específico.
- Exige usuário autenticado via token (email/perfil extraídos do evento).
- Respostas padronizadas via helper `http_response`.

**Exemplo de erro:**

```json
{
  "message": "Requisição inválida. Verifique os parâmetros ou o body."
}
```

**Autenticação:** Bearer JWT (Cognito)