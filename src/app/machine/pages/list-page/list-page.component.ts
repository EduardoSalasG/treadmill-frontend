import { Component, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MachineService } from '../../shared/machine.service';
import { CommonModule } from '@angular/common';
import { converter } from '../../../shared/functions';


@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  constructor(private machineService: MachineService,

  ) {
    this.machineService.getMachines().subscribe(res => {
      this.machines = res.machines
    })
  }

  @Output()

  machines: any = []

  convertToHHMMSS(number: number) {
    return converter.convertToHHMMSS(number)
  }

}
