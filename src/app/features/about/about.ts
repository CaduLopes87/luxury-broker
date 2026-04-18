import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../core/services/contacts/contact-service';
import { BrokerEnum } from '../../core/enums/BrokerEnum.enum';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  contactService = inject(ContactService);

  broker = BrokerEnum;

  goToWhatsapp() {
    const link = this.contactService.getWelcomeWhatsappLink(this.broker.phone);
    this.contactService.redirectToWhatsapp(link);
  }
}
