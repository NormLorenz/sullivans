// https://github.com/LilyaMelkonyan/NodeMailer-with-Angular-7

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmail, IEmailResponse } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  constructor(private http: HttpClient) {
  }

  sendBusinessEmail(email: IEmail): Observable<IEmailResponse> {
    return this.http.post<IEmailResponse>('https://us-central1-sullivan-f9153.cloudfunctions.net/SendBusinessEmail', email)
  }

  sendCustomerEmail(email: IEmail): Observable<IEmailResponse> {
    return this.http.post<IEmailResponse>('https://us-central1-sullivan-f9153.cloudfunctions.net/SendCustomerEmail', email)
  }
}