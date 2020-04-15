import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {API} from '../Constanta/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient) {
  }
  getAllData(): Observable<User[]>{
return  this.httpClient.get<User[]>(API + 'users');
  }
}
