import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from 'src/assets/shared/model/Establishment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  url = `${environment.url}establishment` ;


  constructor(private httpClient : HttpClient) { }

  findAll() : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.url}/findAll`)
  }

  findTopFive() : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.url}/findTopFive`)
  }

  findByName(name : string) : Observable<Establishment[]>{
    return this.httpClient.get<Establishment[]>(`${this.url}/findByName${name}`)
  }

  create(establishment : Establishment) : Observable<Establishment>{
    return this.httpClient.post<Establishment>(`${this.url}/insert`,establishment)
  }
}
