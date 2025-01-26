import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'bs';

interface Translations {
  [key: string]: string;
}

interface LanguageTranslations {
  [key: string]: Translations;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();

  translations: LanguageTranslations = {
    en: {
      // Header
      home: 'Home',
      services: 'Services',
      stylists: 'Our Stylists',
      booking: 'Book Now',
      contact: 'Contact',

      // Stylists Page
      ourExpertStylists: 'Our Expert Stylists',
      meetOurTeam: 'Meet our team of professional hair artists dedicated to making you look and feel amazing',
      bookAppointment: 'Book Appointment',
      
      // Positions
      masterStylist: 'Master Stylist',
      seniorStylist: 'Senior Stylist',
      creativeDirector: 'Creative Director',

      // Specialties
      colorSpecialist: 'Color Specialist',
      cuttingEdgeStyles: 'Cutting Edge Styles',
      hairExtensions: 'Hair Extensions',
      precisionCutting: 'Precision Cutting',
      mensStyling: 'Men\'s Styling',
      asianHairExpert: 'Asian Hair Expert',
      bridalStyling: 'Bridal Styling',
      colorCorrection: 'Color Correction',
      texturedHair: 'Textured Hair',

      // Footer
      allRightsReserved: 'All rights reserved'
    },
    bs: {
      // Header
      home: 'Početna',
      services: 'Usluge',
      stylists: 'Naši Stilisti',
      booking: 'Rezerviši',
      contact: 'Kontakt',

      // Stylists Page
      ourExpertStylists: 'Naši Stručni Stilisti',
      meetOurTeam: 'Upoznajte naš tim profesionalnih frizera posvećenih tome da izgledate i osjećate se nevjerovatno',
      bookAppointment: 'Rezerviši Termin',
      
      // Positions
      masterStylist: 'Master Stilista',
      seniorStylist: 'Viši Stilista',
      creativeDirector: 'Kreativni Direktor',

      // Specialties
      colorSpecialist: 'Specijalista za Boje',
      cuttingEdgeStyles: 'Moderni Stilovi',
      hairExtensions: 'Nadogradnja Kose',
      precisionCutting: 'Precizno Šišanje',
      mensStyling: 'Muško Šišanje',
      asianHairExpert: 'Ekspert za Azijsku Kosu',
      bridalStyling: 'Svadbene Frizure',
      colorCorrection: 'Korekcija Boje',
      texturedHair: 'Teksturirana Kosa',

      // Footer
      allRightsReserved: 'Sva prava zadržana'
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && (savedLang === 'en' || savedLang === 'bs')) {
        this.currentLang.next(savedLang);
      }
    }
  }

  setLanguage(lang: Language) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('preferred-language', lang);
    }
    this.currentLang.next(lang);
  }

  translate(key: string): string {
    const currentLang = this.currentLang.value;
    return this.translations[currentLang][key] || key;
  }
} 