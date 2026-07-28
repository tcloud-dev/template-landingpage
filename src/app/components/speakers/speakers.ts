import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Speaker {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.html',
  styleUrl: './speakers.css'
})
export class SpeakersComponent {
  speakers: Speaker[] = [
    {
      name: 'Ana Silva',
      role: 'Tech Lead & Cloud Architect',
      bio: 'Especialista em arquitetura cloud com mais de 10 anos de experiência em transformação digital.',
      image: 'https://via.placeholder.com/300x300/667eea/ffffff?text=AS',
      linkedin: '#',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Carlos Santos',
      role: 'DevOps Engineer',
      bio: 'Pioneiro em práticas DevOps e automação de infraestrutura em grandes empresas.',
      image: 'https://via.placeholder.com/300x300/764ba2/ffffff?text=CS',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Maria Oliveira',
      role: 'Full Stack Developer',
      bio: 'Desenvolvedora apaixonada por criar experiências web modernas e acessíveis.',
      image: 'https://via.placeholder.com/300x300/f093fb/ffffff?text=MO',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Pedro Costa',
      role: 'Security Specialist',
      bio: 'Expert em segurança da informação e boas práticas de desenvolvimento seguro.',
      image: 'https://via.placeholder.com/300x300/4facfe/ffffff?text=PC',
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  ];
}
