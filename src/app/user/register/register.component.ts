import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    name = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])

    email = new FormControl('', [
      Validators.required,
      Validators.email
    ])

    age = new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ])

    password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ])

    confirm_password = new FormControl('', [
      Validators.required,
    ])

    phoneNumber = new FormControl('', [
      Validators.required,
    ])

    showAlert = false;
    alertMsg = 'Submitting... Please wait...'
    alertColor= 'blue';

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Submitting... Please wait...'
    this.alertColor= 'blue';
  }

}
