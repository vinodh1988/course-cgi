
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ReviewService {

  constructor(private http:HttpClient) 
  { }

  getReviews():Observable<Object>{
     return this.http.get("http://162.241.200.65:8899/rest-api/reviews");
  }

}
