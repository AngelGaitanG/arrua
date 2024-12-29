import { Component, HostListener } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

interface NavLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgFor, NgClass]
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { text: 'Sobre nosotros', url: '#about' },
    { text: 'Servicios', url: '#services' },
    { text: 'Especialistas', url: '#doctors' },
    { text: 'Comentarios', url: '#reviews' },
    { text: 'Contacto', url: '#contact' }
  ];

  phoneNumber = '2664647228';
  menuOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
