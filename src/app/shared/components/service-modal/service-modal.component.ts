import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../../../core/models/service.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent {
  @Input() service!: Service | null;
  @Input() moreServices!: Service[] | null;
  @Input() moreServicesModal!: boolean;
  @Output() closeModal = new EventEmitter<void>();
  isClosing: boolean = false;

  closeServiceModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.closeModal.emit();
    }, 300);
  }
}
