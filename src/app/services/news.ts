import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News {

  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name:string, email: string): Observable<newsResponse>{
    const data={name, email};

    return this.http.post<newsResponse>(this.endpointUrl, data);
  }
}
