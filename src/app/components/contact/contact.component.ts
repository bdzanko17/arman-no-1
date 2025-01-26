import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  salonEmail = 'arman@gmail.com';
  salonPhone = '+387 61 123 456';
  salonAddress = 'Sarajevo, Bosnia and Herzegovina';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private languageService: LanguageService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // In a real application, you would send this to your backend
      console.log(this.contactForm.value);
      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.contactForm.reset();
    } else {
      this.snackBar.open('Please fill all required fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
    }
  }

  getErrorMessage(field: string): string {
    if (this.contactForm.get(field)?.hasError('required')) {
      return 'This field is required';
    }
    if (this.contactForm.get(field)?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (this.contactForm.get(field)?.hasError('minlength')) {
      return 'Input is too short';
    }
    if (this.contactForm.get(field)?.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    return '';
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
