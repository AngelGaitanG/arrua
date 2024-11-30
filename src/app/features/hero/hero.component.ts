import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
})
export class HeroComponent {
  title = 'Con el tratamiento moderno de los dientes sin dolor ni miedo';
  description = 'Clínica, donde la salud de los dientes es su especialidad. Profesionalismo y enfoque individual.';
} 