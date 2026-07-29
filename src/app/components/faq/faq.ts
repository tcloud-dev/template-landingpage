import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqItems: FaqItem[] = [
    {
      question: 'O evento é gratuito?',
      answer: 'Sim. O T-Cloud + IA: Customer Day é um evento presencial 100% gratuito e exclusivo para clientes convidados.',
      isOpen: false
    },
    {
      question: 'Onde e quando acontece?',
      answer: 'No dia 26 de agosto, das 08h30 às 17h30, na Matriz da TOTVS em São Paulo (Av. Braz Leme, 1000 - Santana).',
      isOpen: false
    },
    {
      question: 'Posso levar acompanhantes da minha empresa?',
      answer: 'Sim. No entanto, por motivos de segurança e liberação na portaria, cada participante deve preencher sua própria inscrição individualmente.',
      isOpen: false
    },
    {
      question: 'Haverá alimentação no local?',
      answer: 'Sim! A programação inclui Welcome Coffee, Coffee Breaks, Almoço Executivo VIP e Coquetel de encerramento, todos inclusos sem custo.',
      isOpen: false
    },
    {
      question: 'O local possui estacionamento?',
      answer: 'Sim, a sede da TOTVS conta com serviço de estacionamento pago no local (sujeito à lotação).',
      isOpen: false
    },
    {
      question: 'Qual é o dress code recomendado?',
      answer: 'Recomendamos o traje Empresarial Casual (Business Casual).',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    const isCurrentlyOpen = this.faqItems[index].isOpen;

    // Fecha todas as perguntas
    this.faqItems.forEach(item => item.isOpen = false);

    // Se a pergunta clicada estava fechada, abre ela
    // Se estava aberta, deixa fechada (todas foram fechadas acima)
    if (!isCurrentlyOpen) {
      this.faqItems[index].isOpen = true;
    }
  }
}
