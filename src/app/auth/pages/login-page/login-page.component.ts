import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private authService: AuthService,
    private router: Router,
  ) {

  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  error = ""


  onSubmit() {
    this.login()
  }

  async login() {

    let body = {
      email: this.email?.value!,
      password: this.password?.value!,
    }

    try {

      this.authService.login(body).subscribe({
        next: (res: any) => {
          console.log(res)

          this.authService.userLogin = res

          if (this.authService.userLogin.token !== "") {
            this.authService.userLogged = true
            this.router.navigateByUrl("/session")
          }

        },
        error: error => {
          if (error.status == 400) {
            this.error = 'Correo o contraseña incorrecta'
          }
          console.log("Este es el error", error)
        }
      })
    }
    catch (error) {
    }

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
