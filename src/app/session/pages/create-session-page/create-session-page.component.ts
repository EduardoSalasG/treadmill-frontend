import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-session-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './create-session-page.component.html',
  styleUrl: './create-session-page.component.css'
})
export class CreateSessionPageComponent {

  constructor(private router: Router) { }

  createSessionForm = new FormGroup({
    minutes: new FormControl('', Validators.required)
  })


  onSubmit() {
    //TODO: Llamar al servicio y guardar la sesión:
    console.log(this.createSessionForm.get('minutes')?.value)
    alert("ok")

    //Redireccionar al listado

    this.router.navigateByUrl('/session/list')
  }

  get minutes() {
    return this.createSessionForm.get('minutes');
  }


}
