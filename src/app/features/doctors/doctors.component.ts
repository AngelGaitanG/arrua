import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Doctor } from '../../core/models/doctor.interface';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctors: Doctor[] = [
    {
      name: 'García Laura Isabel',
      position: 'Especialista en odontopediatría',
      image: 'assets/images/doctor1.jpeg'
    },
    {
      name: 'Martínez Ana Sofía',
      position: 'Cirujana maxilofacial',
      image: 'assets/images/doctor2.jpeg'
    },
    {
      name: 'López María Fernanda',
      position: 'Especialista en Ortodoncia',
      image: 'assets/images/doctor3.jpeg'
    }
  ];

  expandedIndex = 0;

  expandCard(index: number) {
    this.expandedIndex = index;
  }
}
