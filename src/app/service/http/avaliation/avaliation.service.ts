import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avaliation } from 'src/assets/shared/model/Avaliation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliationHttpService {

  url = `${environment.url}avaliation` ;

  constructor(private httpClient : HttpClient) { }


  create(value : Avaliation) : Observable<Avaliation>{
    return this.httpClient.post<Avaliation>(`${this.url}/insert`,value)
  }
}
