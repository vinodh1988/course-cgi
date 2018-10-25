import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EnquiryService {
httpOptions;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
     }

   }

  postEnquiry(obj):Observable<object>{
    return this.http.post(
      "http://162.241.200.65:8894/rest-api/enquiries",
    obj,
    this.httpOptions);
  }

}
