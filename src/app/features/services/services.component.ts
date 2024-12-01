import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceModalComponent } from '../../shared/components/service-modal/service-modal.component';
import { Service } from '../../core/models/service.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: true,
  imports: [CommonModule, ServiceModalComponent],
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Estética Dental', image: 'assets/images/Estetica.jpeg', description: 'Mejora la apariencia de tus dientes.', subServices: [
      { title: 'Blanqueamiento Dental', description: 'Proceso para aclarar el color de los dientes, eliminando manchas y decoloraciones.' },
      { title: 'Limpieza Dental', description: 'Procedimiento para eliminar la placa bacteriana y el sarro de los dientes, previniendo enfermedades periodontales.' },
      { title: 'Tratamiento de Caries', description: 'Proceso para eliminar el tejido dental dañado por la caries y restaurar la forma y función del diente.' },
      { title: 'Tratamiento de Gingivitis', description: 'Procedimiento para tratar la inflamación de las encías, previniendo la pérdida de dientes.' }
    ] },
    { title: 'Prótesis', image: 'assets/images/Protesis.jpeg', description: 'Soluciones para reemplazar dientes perdidos.', subServices: [
      { title: 'Prótesis Fija', description: 'Solución permanente para reemplazar dientes perdidos, restaurando la función y estética dental.' },
      { title: 'Prótesis Removible', description: 'Opción móvil para reemplazar dientes perdidos, removible y cómoda para uso diario.' },
      { title: 'Prótesis de Implantes', description: 'Solución para reemplazar dientes perdidos utilizando implantes dentales como soporte.' }
    ] },
    { title: 'Cirugía Dental', image: 'assets/images/Cirugia.jpeg', description: 'Procedimientos quirúrgicos para tu salud dental.', subServices: [
      { title: 'Extracción de Dientes', description: 'Procedimiento para eliminar dientes que ya no están en uso.' },
      { title: 'Tratamiento de Conductos', description: 'Procedimiento para tratar enfermedades de los conductos dentales.' },
      { title: 'Extracción de Tercer Molar', description: 'Extracción de terceros molares que ya no están en uso.' }
    ] },
    { title: 'Ortodoncia', image: 'assets/images/Ortodoncia.jpeg', description: 'Alinea tus dientes con tratamientos modernos.', subServices: [
      { title: 'Ortodoncia Metálica', description: 'Solución para alinear y corregir la posición de los dientes.' },
      { title: 'Ortodoncia Removible', description: 'Opción móvil para alinear y corregir la posición de los dientes.' },
      { title: 'Ortodoncia Fija', description: 'Solución permanente para alinear y corregir la posición de los dientes.' }
    ] }
  ];
  moreServices: Service[] = [
    { title: 'Aumento de Labios', image: 'assets/images/AumentoLabios.jpeg', description: 'Mejora la apariencia y volumen de tus labios.', subServices: [] },
    { title: 'Relleno de Arrugas', image: 'assets/images/RellenoArrugas.jpeg', description: 'Reduce las arrugas y líneas de expresión para una apariencia más juvenil.', subServices: [] },
  ];

  selectedService!: Service | null;
  moreServicesModal: boolean = false;

  showServiceModal(service: Service) {
   
      this.selectedService = service;
  }

  showMoreServicesModal() {
    this.moreServicesModal = true;
  }

  closeServiceModal() {
    this.selectedService = null;
    this.moreServicesModal = false;
  }


} 