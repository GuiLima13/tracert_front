import { Injectable } from '@angular/core';
import { UserDAO } from 'src/assets/shared/model/dao/UserDAO';
@Injectable({
  providedIn: 'root'
})
export class UserFilterService {

  user = {} as UserDAO

  constructor() { }
}
