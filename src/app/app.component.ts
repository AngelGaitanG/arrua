import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { ServicesComponent } from './features/services/services.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './features/about/about.component';
import { DoctorsComponent } from './features/doctors/doctors.component';
import { ContactComponent } from './features/contact/contact.component';
import { LocationComponent } from './features/location/location.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ServicesComponent, CommonModule, AboutComponent, DoctorsComponent, ContactComponent, LocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ArruaDentalClinic';
}
