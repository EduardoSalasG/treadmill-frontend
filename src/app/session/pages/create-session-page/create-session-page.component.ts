import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-session-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule,],
  templateUrl: './create-session-page.component.html',
  styleUrl: './create-session-page.component.css'
})
export class CreateSessionPageComponent {

  constructor(private router: Router) { }

  minutes = new FormControl('');

  save() {
    //TODO: Llamar al servicio y guardar la sesión:
    console.log(this.minutes.value)
    alert("ok")

    //Redireccionar al listado

    this.router.navigateByUrl('/session/list')
  }

}
