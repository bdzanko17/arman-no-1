import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule
  ]
})
export class StylistsComponent {
  stylists = [
    {
      name: 'Sarah Johnson',
      position: 'Master Stylist',
      image: 'assets/images/stylist1.jpg',
      description: 'With over 10 years of experience, Sarah specializes in creative coloring and avant-garde styling.',
      specialties: ['Creative Coloring', 'Avant-garde Styling', 'Hair Extensions'],
      socialLinks: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Michael Chen',
      position: 'Senior Stylist',
      image: 'assets/images/stylist2.jpg',
      description: 'Michael is known for his precision cutting techniques and expertise in men\'s styling.',
      specialties: ['Precision Cutting', 'Men\'s Styling', 'Textured Cuts'],
      socialLinks: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emma Rodriguez',
      position: 'Creative Director',
      image: 'assets/images/stylist3.jpg',
      description: 'Emma brings her international experience to create stunning bridal and special occasion styles.',
      specialties: ['Bridal Styling', 'Color Correction', 'Special Occasions'],
      socialLinks: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    }
  ];

  translate(key: string): string {
    // Return the key as is since we're removing translations
    return key;
  }
}
