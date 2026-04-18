import { Component, inject, OnInit } from '@angular/core';
import { BrokerEnum } from '../../core/enums/BrokerEnum.enum';
import { ContactService } from '../../core/services/contacts/contact-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  contactService = inject(ContactService);

  whatsappLink = '';
  instagramLink = `https://instagram.com/${BrokerEnum.instagramUser}`;
  youtubeLink = `https://youtube.com/${BrokerEnum.youtubeUser}`;
  broker = BrokerEnum;

  ngOnInit(): void {
    this.whatsappLink = this.contactService.getWelcomeWhatsappLink(this.broker.phone);
  }
}
