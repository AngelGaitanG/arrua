import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Doctor } from '../../core/models/doctor.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTooth, faGraduationCap, faClock, faLanguage, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-doctors',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
    // Font Awesome icons
    faTooth = faTooth;
    faGraduationCap = faGraduationCap;
    faClock = faClock;
    faLanguage = faLanguage;
    faStar = faStar;

    doctors: Doctor[] = [
        {
            name: 'García Laura Isabel',
            position: 'Especialista en odontopediatría',
            image: 'assets/images/doctor1.jpeg',
            education: 'Universidad Nacional de Odontología',
            experience: '12 años de experiencia',
            languages: ['Español', 'Inglés'],
            specialties: [
                'Tratamientos preventivos infantiles',
                'Ortodoncia interceptiva',
                'Sedación consciente'
            ],
            schedule: 'Lunes a Viernes: 9:00 - 17:00',
            description: 'Especializada en crear experiencias dentales positivas para niños. Enfoque en prevención y educación dental temprana.'
        },
        {
            name: 'Martínez Ana Sofía',
            position: 'Cirujana maxilofacial',
            image: 'assets/images/doctor2.jpeg',
            education: 'Universidad Internacional de Cirugía Oral',
            experience: '15 años de experiencia',
            languages: ['Español', 'Inglés', 'Portugués'],
            specialties: [
                'Cirugía oral avanzada',
                'Implantes dentales',
                'Reconstrucción maxilofacial'
            ],
            schedule: 'Martes a Sábado: 8:00 - 16:00',
            description: 'Experta en procedimientos quirúrgicos complejos. Comprometida con la excelencia y la seguridad del paciente.'
        },
        {
            name: 'López María Fernanda',
            position: 'Especialista en Ortodoncia',
            image: 'assets/images/doctor3.jpeg',
            education: 'Academia Europea de Ortodoncia',
            experience: '10 años de experiencia',
            languages: ['Español', 'Inglés', 'Francés'],
            specialties: [
                'Ortodoncia invisible',
                'Brackets estéticos',
                'Ortodoncia lingual'
            ],
            schedule: 'Lunes a Viernes: 10:00 - 18:00',
            description: 'Pionera en técnicas de ortodoncia moderna. Enfocada en tratamientos personalizados y estéticamente superiores.'
        }
    ];

    expandedIndex: number = -1;
    isMobile: boolean = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.checkScreenSize();
        }
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.checkScreenSize();
        }
    }

    @HostListener('window:resize')
    checkScreenSize() {
        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = window.innerWidth <= 768;
        }
    }

    toggleExpand(index: number) {
        this.expandedIndex = this.expandedIndex === index ? -1 : index;
    }

    scheduleAppointment(doctor: Doctor, event: Event) {
        event.stopPropagation();
        console.log('Agendando cita con:', doctor.name);
    }
}
