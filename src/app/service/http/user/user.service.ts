import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/assets/shared/model/User';
import { Observable } from 'rxjs';
import { UserDAO } from 'src/assets/shared/model/dao/UserDAO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   url = `${environment.url}user` ;


  constructor(private httpClient : HttpClient) { }

  createUser(user:User) : Observable<User>{
    return this.httpClient.post<User>(`${this.url}/insert`,user)
  }

  login(user:User) : Observable<UserDAO>{
    return this.httpClient.post<UserDAO>(`${this.url}/login`,user)
  }


}
