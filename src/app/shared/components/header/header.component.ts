import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface NavLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { text: 'Sobre nosotros', url: '#' },
    { text: 'Sobre la clínica', url: '#' },
    { text: 'Especialistas', url: '#' },
    { text: 'Comentarios', url: '#' },
    { text: 'Contactos', url: '#' }
  ];

  phoneNumber = '2664647228';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
