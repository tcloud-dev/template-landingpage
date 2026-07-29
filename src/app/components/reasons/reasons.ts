import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-reasons',
  imports: [CommonModule],
  templateUrl: './reasons.html',
  styleUrl: './reasons.css',
})
export class Reasons {
  reasons: Reason[] = [
    {
      icon: 'cloud',
      title: 'IA Nativa na Prática',
      description: 'Descubra como a estratégia artificial integrada ao T-Cloud otimiza rotinas, acelera tomada de decisões e reduz a sua operação.'
    },
    {
      icon: 'rocket',
      title: 'Roadmap & Lançamentos Exclusivos',
      description: 'Tenha acesso em primeira mão às novidades e aos próximos passos do ecossistema TOTVS Cloud diretamente com os times de produto.'
    },
    {
      icon: 'star',
      title: 'Espaço Cloud VOX & Destaques',
      description: 'Participe de discussões exclusivas, compartilhe insights e faça networking em um ambiente focado na usabilidade da plataforma e no que há prático das tecnologias no dia a dia.'
    }
  ];
}
