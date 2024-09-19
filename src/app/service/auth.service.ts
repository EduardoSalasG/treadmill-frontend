import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';

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
  token?: string;
  error?: string
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
    token: "",
    error: ""


  }

  userLogged: Boolean = false


  login(body: LoginBody): Observable<UserLogin> {

    return this.http.post<UserLogin>(`${environments.baseURL}auth/login`, body);

  }

  signUp(body: RegisterBody) {

    return this.http.post(`${environments.baseURL}auth/register`, body);

  }


  logOut() {
    this.userLogged = false;
    this.userLogin = {
      user: {
        id: "",
        name: "",
        email: "",
        emailValidated: false,
        role: [""]
      },
      token: ""
    }
    this.reloadPage()
  }

  reloadPage() {
    window.location.reload()
  }

  getToken() {
    return this.userLogin.token;
  }






}
