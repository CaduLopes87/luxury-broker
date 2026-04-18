import { Component, inject, OnInit } from '@angular/core';
import { BrokerEnum } from '../../core/enums/BrokerEnum.enum';
import { ContactService } from '../../core/services/contacts/contact-service';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts implements OnInit {
  contactService = inject(ContactService);

  whatsappLink = '';
  instagramLink = `https://instagram.com/${BrokerEnum.instagramUser}`;
  youtubeLink = `https://youtube.com/${BrokerEnum.youtubeUser}`;
  phone = BrokerEnum.phone;

  ngOnInit(): void {
    this.whatsappLink = this.contactService.getWelcomeWhatsappLink(this.phone);
  }
}
