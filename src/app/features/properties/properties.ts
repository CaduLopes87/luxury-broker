import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-properties',
  imports: [CommonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.scss',
})
export class Properties {
   properties = [
    {
      image: 'assets/apartment-1.jpg',
      title: 'Ed. Saphira',
      location: 'Brasília • Lago Sul',
      price: 'R$ 3.500.000'
    },
    {
      image: 'assets/apartment-1.jpg',
      title: 'Penthouse Building',
      location: 'Brasília • Noroeste',
      price: 'R$ 2.100.000'
    },
    {
      image: 'assets/apartment-1.jpg',
      title: 'Exclusive Residence',
      location: 'Brasília • Asa Norte',
      price: 'R$ 1.800.000'
    }
  ];
}
