import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-session-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './create-session-page.component.html',
  styleUrl: './create-session-page.component.css'
})
export class CreateSessionPageComponent {

  constructor(private router: Router) { }

  save() {
    this.router.navigateByUrl('/session/list')
  }

}
