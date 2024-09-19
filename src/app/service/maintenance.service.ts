import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Observable } from 'rxjs';

export interface Maintenance {
  _id: string;
  date: Date;
  description: string;
  machine: string;
  user: string;
}

export interface Maintenances {
  maintenances: Maintenance[]
}


@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) { }

  getMaintenancesByMachineId(body: { machine: string }): Observable<Maintenances> {

    return this.http.post<Maintenances>(`${environments.baseURL}maintenance/by-machine`, body);
  }
}
