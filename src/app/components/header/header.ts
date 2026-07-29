import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Ativa após rolar a altura completa do hero (100vh) + 100px
    this.isScrolled = window.scrollY > window.innerHeight;
  }
}
