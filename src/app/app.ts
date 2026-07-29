import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Reasons } from './components/reasons/reasons';
import { Schedule } from './components/schedule/schedule';
import { Location } from './components/location/location';
import { Faq } from './components/faq/faq';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Reasons, Schedule, Location, Faq, Cta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('event-landing');
}
