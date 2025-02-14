import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionService } from '../../shared/session.service';
import { AuthService } from '../../../auth/shared/auth.service';
import { CommonModule } from '@angular/common';
import { converter } from '../../../shared/functions';

export interface Sessions {
  sessions: Session[]

}

export interface Session {
  _id: string;
  initDate: Date;
  endDate: Date;
  duration: number;
  machine: string;
  user: string;
}


@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  sessions: any = []

  constructor(private sessionService: SessionService,
    private authService: AuthService
  ) {
    this.sessionService.getSessionByUserId(this.authService.userLogin.user.id).subscribe(res => {
      this.sessions = res.sessions
    })
  }

  convert(number: number) {
    return converter.convertToHHMMSS(number)
  }



}
