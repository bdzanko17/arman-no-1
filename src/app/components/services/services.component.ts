import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      name: 'Haircut & Styling',
      description: 'Professional haircuts and styling services tailored to your preferences',
      price: 'From $30',
      duration: '45-60 min',
      details: [
        'Consultation with expert stylist',
        'Shampoo and conditioning',
        'Precision cutting',
        'Professional styling',
        'Style recommendations'
      ]
    },
    {
      name: 'Color & Highlights',
      description: 'Transform your look with our expert coloring services',
      price: 'From $75',
      duration: '90-120 min',
      details: [
        'Color consultation',
        'Full head coloring',
        'Highlights/Lowlights',
        'Balayage/Ombre',
        'Toner application'
      ]
    },
    {
      name: 'Hair Treatments',
      description: 'Revitalize your hair with our nourishing treatments',
      price: 'From $45',
      duration: '30-45 min',
      details: [
        'Deep conditioning',
        'Keratin treatment',
        'Scalp treatment',
        'Anti-frizz treatment',
        'Hair repair therapy'
      ]
    },
    {
      name: 'Special Occasion Styling',
      description: 'Look your best for any special event',
      price: 'From $60',
      duration: '60 min',
      details: [
        'Bridal styling',
        'Event updos',
        'Formal styling',
        'Hair accessories',
        'Consultation included'
      ]
    }
  ];
}
