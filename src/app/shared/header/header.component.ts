import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService, Language } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private languageService: LanguageService) {}

  get currentLang$() {
    return this.languageService.currentLang$;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
