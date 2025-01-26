import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  bookingForm: FormGroup;
  
  services = [
    'Haircut & Styling',
    'Color & Highlights',
    'Hair Treatments',
    'Special Occasion Styling'
  ];

  timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM'
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // In a real application, you would send this to your backend
      console.log(this.bookingForm.value);
      this.snackBar.open('Appointment booked successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
      this.bookingForm.reset();
    } else {
      this.snackBar.open('Please fill all required fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
    }
  }

  getErrorMessage(field: string): string {
    if (this.bookingForm.get(field)?.hasError('required')) {
      return 'This field is required';
    }
    if (this.bookingForm.get(field)?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (this.bookingForm.get(field)?.hasError('minlength')) {
      return 'Input is too short';
    }
    if (this.bookingForm.get(field)?.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    return '';
  }
}
