import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/services/contacts/contact-service';
import { BrokerEnum } from '../../core/enums/BrokerEnum.enum';

@Component({
  selector: 'app-properties',
  imports: [CommonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.scss',
})
export class Properties {
  contactService = inject(ContactService);

  properties = [
    {
      image: 'assets/apartment-1.jpg',
      title: 'Ed. Saphira',
      location: 'Brasília • Lago Sul',
      price: 'R$ 3.500.000',
    },
    {
      image: 'assets/apartment-2.jpg',
      title: 'Penthouse Building',
      location: 'Brasília • Noroeste',
      price: 'R$ 2.100.000',
    },
    {
      image: 'assets/apartment-3.jpg',
      title: 'Exclusive Residence',
      location: 'Brasília • Asa Norte',
      price: 'R$ 1.800.000',
    },
  ];

  getApartmentContact(apartmentTitle: string) {
    const message = `Olá, ${BrokerEnum.firstName}! Poderia me passar mais informações sobre o ${apartmentTitle}?`;
    const link = this.contactService.getWhatsappLink(BrokerEnum.phone, message);
  
    this.contactService.redirectToWhatsapp(link);
  }
}
