import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  formSubmitHandler() {
    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;
    console.log(form.value);

    // *form value => on init
    const { email, password } = form?.value;

    // *two ways to clear input fields
    // form.reset();
    form.setValue({ email: '', password: '' });
  }
}
