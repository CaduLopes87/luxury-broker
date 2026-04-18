import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/services/contacts/contact-service';
import { BrokerEnum } from '../../core/enums/BrokerEnum.enum';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  contactService = inject(ContactService);

  broker = BrokerEnum;

  goToWhatsapp() {
    const link = this.contactService.getWelcomeWhatsappLink(this.broker.phone);
    this.contactService.redirectToWhatsapp(link);
  }
}
