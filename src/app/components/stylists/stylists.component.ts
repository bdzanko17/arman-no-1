import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-stylists',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.scss']
})
export class StylistsComponent {
  stylists = [
    {
      name: 'Sarah Johnson',
      position: 'masterStylist',
      image: 'assets/images/stylist1.jpg',
      description: 'With over 10 years of experience, Sarah specializes in creative coloring and avant-garde styling.',
      specialties: ['colorSpecialist', 'cuttingEdgeStyles', 'hairExtensions'],
      instagram: '#',
      facebook: '#',
      pinterest: '#'
    },
    {
      name: 'Michael Chen',
      position: 'seniorStylist',
      image: 'assets/images/stylist2.jpg',
      description: 'Michael brings his international experience and modern techniques to create unique, personalized looks.',
      specialties: ['precisionCutting', 'mensStyling', 'asianHairExpert'],
      instagram: '#',
      facebook: '#',
      pinterest: '#'
    },
    {
      name: 'Emma Rodriguez',
      position: 'creativeDirector',
      image: 'assets/images/stylist3.jpg',
      description: 'Emma\'s innovative approach and attention to detail have made her one of the most sought-after stylists.',
      specialties: ['bridalStyling', 'colorCorrection', 'texturedHair'],
      instagram: '#',
      facebook: '#',
      pinterest: '#'
    }
  ];

  constructor(private languageService: LanguageService) {}

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
