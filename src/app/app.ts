import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Schedule } from './components/schedule/schedule';
import { Faq } from './components/faq/faq';
import { RegistrationForm } from './components/registration-form/registration-form';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Schedule, Faq, RegistrationForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('event-landing');
}
