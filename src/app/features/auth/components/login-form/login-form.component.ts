import { Component, output, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { InputComponent } from '../../../../shared/ui/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  login = output<{
    username: string,
    password: string
  }>();

  public formLogin: FormGroup;

  loading = input(false);

  wrongCredentials = input(false);

  constructor(){
    this.formLogin = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
  
  submit() {
    const {username, password} = this.formLogin.value;
    this.login.emit({
      username,
      password,
    });
  }
}
