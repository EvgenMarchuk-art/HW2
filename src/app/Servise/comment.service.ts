import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {API} from '../Constanta/constants';
import {CommentModel} from '../Models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private httpClient: HttpClient) {
  }
  getAllData(): Observable<CommentModel[]>{
    return  this.httpClient.get<CommentModel[]>(API + 'comments');
  }
}
