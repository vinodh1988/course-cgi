
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ReviewService {
httpOptions;
  constructor(private http:HttpClient) 
  { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
     }
  }

  getReviews():Observable<Object>{
     return this.http.get("http://162.241.200.65:8899/rest-api/reviews");
  }


  postReviews(obj):Observable<object>{
    return this.http.post(
      "http://162.241.200.65:8894/rest-api/reviews",
    obj,
    this.httpOptions);
  }

}
