import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      name: 'Haircut & Styling',
      description: 'Professional cuts and styling services tailored to your preferences',
      price: 'From $30',
      duration: '45-60 min',
      icon: 'content_cut'
    },
    {
      name: 'Color & Highlights',
      description: 'Transform your look with our expert coloring services',
      price: 'From $75',
      duration: '90-120 min',
      icon: 'palette'
    },
    {
      name: 'Hair Treatments',
      description: 'Revitalize your hair with our nourishing treatments',
      price: 'From $45',
      duration: '30-45 min',
      icon: 'spa'
    },
    {
      name: 'Special Occasion Styling',
      description: 'Look your best for any special event',
      price: 'From $60',
      duration: '60 min',
      icon: 'celebration'
    }
  ];
}
