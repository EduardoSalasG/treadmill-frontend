import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
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


  onSubmit() {
    this.login()
  }

  async login() {

    let body = {
      email: this.email?.value!,
      password: this.password?.value!,
    }

    console.log(body)

    try {

      this.authService.login(body).subscribe((res) => {
        this.authService.userLogin = res
        console.log(this.authService.userLogin)

        if (this.authService.userLogin.token !== "") {
          this.authService.userLogged = true
          this.router.navigateByUrl("/session")
        }

      })

    } catch (error) {

    }

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
