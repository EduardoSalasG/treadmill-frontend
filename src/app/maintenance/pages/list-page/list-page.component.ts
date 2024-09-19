import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  @Input() machineId: string = ''

  constructor() { }










}
