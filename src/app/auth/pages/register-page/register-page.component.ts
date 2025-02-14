import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  error = ''

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })




  onSubmit() {
    this.signUp();
  }

  async signUp() {
    let body = {
      name: this.name?.value!,
      email: this.email?.value!,
      password: this.password?.value!

    }

    this.authService.signUp(body).subscribe({
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
          this.error = 'Error al crear usuario'
        }
        console.log("Este es el error", error)

      }
    })


  }

  get name() {
    return this.signUpForm.get('name')
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password() {
    return this.signUpForm.get('password')
  }







}
