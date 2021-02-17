import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordStrengthValidator } from '../helper/password-strength.validators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authenticationService: AuthenticationService) { }
  unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/";

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      'password': ['', [Validators.required, PasswordStrengthValidator]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }


  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        } else if (this.formGroup.get('username').hasError('pattern')) {
          return 'Username is not valid';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        } else if (this.formGroup.get('password').hasError('passwordStrength')) {
          return this.formGroup.get('password').errors['passwordStrength'];
        }
        break;``
      default:
        return '';
    }
  }

  onSubmit(formValues) {
    if (this.formGroup.valid) {
      this.router.navigate(['/home']);
      this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                });
    }
  }

}
