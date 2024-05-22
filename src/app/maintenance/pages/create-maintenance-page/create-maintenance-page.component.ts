import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-maintenance-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule,],
  templateUrl: './create-maintenance-page.component.html',
  styleUrl: './create-maintenance-page.component.css'
})
export class CreateMaintenancePageComponent {

  constructor(private router: Router) { }

  description = new FormControl('');

  save() {
    //TODO: Llamar al servicio y guardar la maintenance:
    console.log(this.description.value)
    alert("Mantenimiento guardado" + this.description.value)

    //Redireccionar al listado

    this.router.navigateByUrl('/maintenance/list')
  }


}
