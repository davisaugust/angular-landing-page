import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News {

  private endpointUrl = '/api';

  constructor(private http: HttpClient) { }

  sendData(name:string, email: string): Observable<newsResponse>{
    const data={name, email};

    return this.http.post<newsResponse>(this.endpointUrl, data);
  }
}
