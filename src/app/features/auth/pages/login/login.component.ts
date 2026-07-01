import { Component, inject, signal } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CardComponent,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  authService = inject(AuthService);

  loading = signal(false);
  wrongCredentials = signal(false);

  onLogin(credentials: {
    username: string,
    password: string
  }) {
    this.loading.set(true);
    this.authService.login(credentials).subscribe({
      next: response => {
        console.log(response);
        this.loading.set(false);
      },
      error: err => {
        console.error(err);
        this.loading.set(false);

        if (err.error.message === 'Invalid credentials') {
          this.wrongCredentials.set(true);
        }
      }
    });
  }
}
