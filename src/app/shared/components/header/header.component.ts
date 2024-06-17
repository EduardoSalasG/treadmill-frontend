import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public authService: AuthService,
    private router: Router
  ) {

  }


  async logOut() {
    try {
      this.authService.logOut();
      this.router.navigateByUrl('/')
    }
    catch (error) {

    }

  }



}
