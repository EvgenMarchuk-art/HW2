import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {API} from '../Constanta/constants';
import {Post} from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private httpClient: HttpClient) {
  }

  getAllData(): Observable<Post[]>{
    return  this.httpClient.get<Post[]>(API + 'posts');
  }
  getUsersPost(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(API + `posts?userId=${id}`);
  }
}
