import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterBody {
  email: string;
  password: string;
  name: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface UserLogin {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  role: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin: UserLogin = {
    user: {
      id: "",
      name: "",
      email: "",
      emailValidated: false,
      role: [""]
    },
    token: ""

  }

  userLogged: Boolean = false


  login(body: LoginBody): Observable<UserLogin> {

    return this.http.post<UserLogin>('http://localhost:3000/api/auth/login', body);

  }

  signUp(body: RegisterBody) {

    return this.http.post('http://localhost:3000/api/auth/register', body);

  }





}
