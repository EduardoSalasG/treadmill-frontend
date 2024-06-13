import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MachineService } from '../../../service/machine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  constructor(private machineService: MachineService) {
    this.machineService.getMachines().subscribe(res => {
      this.machines = res.machines
      console.log(this.machines)
    })
  }

  machines: any = []






}
