import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-create-session-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './create-session-page.component.html',
  styleUrl: './create-session-page.component.css'
})
export class CreateSessionPageComponent {

  constructor(private router: Router,
    private sessionService: SessionService,
    private AuthService: AuthService
  ) { }

  createSessionForm = new FormGroup({
    minutes: new FormControl('', Validators.required)
  })

  submitResponse: any


  onSubmit() {
    //TODO: Llamar al servicio y guardar la sesión:
    // console.log(this.createSessionForm.get('minutes')?.value)
    this.createSession()
    // alert("ok")

    //Redireccionar al listado

    // this.router.navigateByUrl('/session/list')
  }

  async createSession() {

    let body = {
      //TODO: TOMAR ID DEL URL
      machine: '660e08806a940cc6b28a186b',
      user: this.AuthService.userLogin.user.id,
      duration: this.minutes?.value,
    }

    try {

      this.sessionService.createSession(body).subscribe((res) => {
        this.submitResponse = res
        console.log(this.submitResponse)

        if (this.submitResponse) {
          this.router.navigateByUrl("/session")
        }

      })

    } catch (error) {

    }

  }


  get minutes() {
    return this.createSessionForm.get('minutes');
  }


}
