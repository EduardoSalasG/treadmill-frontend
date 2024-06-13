import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

export interface GetSessionByMachineAndUserIdBody {
  machine: string;
  user: string;
}

export interface Sessions {
  sessions: Session[]

}

export interface Session {
  _id: ID;
  initDate: EndDateClass;
  endDate: EndDateClass;
  duration: number;
  machine: ID;
  user: ID;
}

export interface ID {
  $oid: string;
}

export interface EndDateClass {
  $date: Date;
}





@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }


  //FIXME: INTERCEPTORS MUST BE CREATED
  getSessionByMachineAndUserId(body: GetSessionByMachineAndUserIdBody) {

    return this.http.post<Sessions>(`${environment.apiUrl}session/by-machine-and-user`, body);

  }








}
