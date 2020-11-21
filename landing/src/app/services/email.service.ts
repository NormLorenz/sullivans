// https://github.com/LilyaMelkonyan/NodeMailer-with-Angular-7
// don't forget to send the right headers test/json

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmail, IEmailResponse } from '../models/email.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  constructor(private http: HttpClient) {
  }

  checkStatus(): Observable<string> {
    return this.http.get<string>(`${environment.baseUrl}/${environment.statusFunction}`);
  }

  sendBusinessEmail(email: IEmail): Observable<IEmailResponse> {
    return this.http.post<IEmailResponse>(`${environment.baseUrl}/${environment.sendBusinessEmailFunction}`, email);
  }

  sendCustomerEmail(email: IEmail): Observable<IEmailResponse> {
    return this.http.post<IEmailResponse>(`${environment.baseUrl}/${environment.sendCustomerEmailFunction}`, email);
  }
}