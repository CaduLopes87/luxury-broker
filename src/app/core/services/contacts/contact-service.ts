import { Injectable } from '@angular/core';
import { BrokerEnum } from '../../enums/BrokerEnum.enum';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  getWhatsappLink(phone: string, message: string) {
    const whatsappNumber = phone.replace(/\D/g, '');
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  getWelcomeWhatsappLink(phone: string) {
    return this.getWhatsappLink(
      phone,
      `Olá, ${BrokerEnum.firstName}! Gostaria de mais informações sobre os imóveis.`,
    );
  }

  redirectToWhatsapp(link: string): void {
    window.open(link, '_blank');
  }
}
