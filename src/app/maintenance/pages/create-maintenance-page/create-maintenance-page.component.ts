import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-maintenance-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './create-maintenance-page.component.html',
  styleUrl: './create-maintenance-page.component.css'
})
export class CreateMaintenancePageComponent {

  constructor(private router: Router) { }

  createMaintenanceForm = new FormGroup({
    description: new FormControl('')
  })



  onSubmit() {
    //TODO: Llamar al servicio y guardar la maintenance:
    console.log(this.createMaintenanceForm.get("description")?.value)
    alert("Mantenimiento guardado" + this.createMaintenanceForm.get("description")?.value)

    //Redireccionar al listado

    this.router.navigateByUrl('/maintenance/list')
  }

  get description() {
    return this.createMaintenanceForm.get('description');
  }



}
