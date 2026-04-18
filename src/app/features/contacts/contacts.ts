import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts implements OnInit {
  whatsappLink = '';
  instagramLink = 'https://instagram.com/sheilabezerraimob';
  youtubeLink = 'https://youtube.com/@sheilabezerraimob';
  phone = '(61) 99146-4961';

  ngOnInit(): void {
    this.whatsappLink = this.getWhatsappLink(
      'Olá, Sheila! Gostaria de mais informações sobre os imóveis.',
    );
  }

  getWhatsappLink(message: string) {
    const whatsappNumber = this.phone.replace(/\D/g, '');
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }
}
