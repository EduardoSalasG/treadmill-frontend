import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable } from 'rxjs';

export interface Machines {
  machines: Machine[];
}

export interface Machine {
  name: string;
  currentUsedTime: number;
  accumulatedUsedTime: number;
  limitTime: number;
  machineType: string;
  status: string;
  id: string;
}


@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  getMachines(): Observable<Machines> {

    return this.http.get<Machines>(`${environments.baseURL}machine`);
  }




}
