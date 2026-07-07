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
      answer: 'Sim, o evento é totalmente gratuito. Basta fazer sua inscrição através do formulário disponível nesta página.',
      isOpen: false
    },
    {
      question: 'Preciso levar notebook?',
      answer: 'Não é obrigatório, mas recomendamos para acompanhar melhor as apresentações práticas.',
      isOpen: false
    },
    {
      question: 'Haverá certificado de participação?',
      answer: 'Sim, todos os participantes receberão certificado digital de participação ao final do evento.',
      isOpen: false
    },
    {
      question: 'Qual o dress code do evento?',
      answer: 'O evento é business casual. Recomendamos roupas confortáveis e profissionais.',
      isOpen: false
    },
    {
      question: 'Haverá estacionamento disponível?',
      answer: 'Sim, o Centro de Convenções TCloud possui estacionamento gratuito para participantes.',
      isOpen: false
    },
    {
      question: 'Posso levar acompanhante?',
      answer: 'O acompanhante também precisa fazer inscrição prévia através do formulário.',
      isOpen: false
    },
    {
      question: 'O almoço está incluso?',
      answer: 'Sim, o almoço e coffee breaks estão inclusos na programação do evento.',
      isOpen: false
    },
    {
      question: 'Posso cancelar minha inscrição?',
      answer: 'Sim, você pode cancelar sua inscrição até 48 horas antes do evento entrando em contato conosco.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
