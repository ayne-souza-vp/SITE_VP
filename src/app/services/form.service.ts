import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb24iOiJ2YWxlcHJlc2VudGUifQ.Wumu7SHV0b9G9Exbbp2ono0r31QQh4Vt5w7sNu9Qs8s"
  };

  constructor(
    private http: HttpClient
  ) { }

  public sendDataForm(body: any): Observable<any> {
    return this.http.post('https://api.meetz.com.br/openapi/v1/create-lead', body, {headers: this.headers})

  }
}
