import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';

export interface GetSessionBydUserIdBody {
  user: string;
}

export interface Sessions {
  sessions: Session[]

}

export interface Session {
  initDate: Date;
  endDate: Date;
  duration: number;
  machine: Machine;
  user: string;
  id: string;
}

export interface Machine {
  name: string;
  id: string;
}

export interface CreateSession {
  machine: string;
  user: string;
  duration: number;
}



@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessionByUserId(body: any) {

    return this.http.post<Sessions>(`${environments.baseURL}session/by-user`, body);

  }

  //TODO: DEFINIR TIPADO
  createSession(body: any) {

    return this.http.post(`${environments.baseURL}session`, body);

  }








}
