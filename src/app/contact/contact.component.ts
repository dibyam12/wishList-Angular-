import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  submitted = false;
  check: boolean = false;

  checkFun() {
    return (this.check = true);
  }

  initials = { Name: '', Email: '', Message: '' };

  contactForm = new FormGroup({
    senderName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
    ]),
  });
  submitForm() {
    this.submitted = true;
  }

  checkForm() {
    if (this.contactForm.invalid) {
      alert('the form cannot be submitted');
      this.initials.Name = '';
      this.initials.Email = '';
      this.initials.Message = '';
      this.checkFun();
    } else {
      this.checkFun();

      alert('the form submitted successfully');
    }
  }
}
