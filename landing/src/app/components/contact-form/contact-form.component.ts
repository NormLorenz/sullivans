import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

import { EmailService } from '../../services/email.service';
import { Subscription } from 'rxjs';
import { IEmailResponse } from 'src/app/models/email.model';

enum State {
  send,
  sending,
  sent,
  error
}

enum Action {
  success,
  error,
  dirty,
  submit
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  public subscription: Subscription;

  state = State.send;

  runStateMachine(action: Action) {
    switch (this.state) {
      case State.send:
        if (action == Action.submit) { this.state = State.sending; }
        break;
      case State.sending:
        if (action == Action.success) { this.state = State.sent; }
        if (action == Action.error) { this.state = State.error; }
        break;
      case State.sent:
        if (action == Action.dirty) { this.state = State.send; }
        break;
      case State.error:
        if (action == Action.dirty) { this.state = State.send; }
        break;
    }
  }

  ngOnInit(): void {
    this.emailForm.statusChanges.subscribe(() => {
      if (this.emailForm.dirty === true) {
        this.runStateMachine(Action.dirty);
      }
    });
  }

  emailForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: [''],
    message: ['']
  });

  sendingFlag = false;

  get name() { return this.emailForm.get('name'); }
  get email() { return this.emailForm.get('email'); }
  get phone() { return this.emailForm.get('phone'); }
  get subject() { return this.emailForm.get('subject'); }
  get message() { return this.emailForm.get('message'); }

  get isSendState() { return this.state === State.send; }
  get isSendingState() { return this.state === State.sending; }
  get isErrorState() { return this.state === State.error; }
  get isSentState() { return this.state === State.sent; }

  onSubmit() {

    this.runStateMachine(Action.submit);
    console.log(this.emailForm.value);

    // setTimeout(() => {
    //   this.emailForm.reset();
    //   this.runStateMachine(Action.success);
    //   this.runStateMachine(Action.error);
    // }, 5000);

    this.emailService.sendEmails(this.emailForm.value).subscribe((responses: IEmailResponse[]) => {
      this.emailForm.reset();
      let result = Action.success;
      responses.forEach((response: IEmailResponse) => {
        if (response.success !== true) { result = Action.error; }
      });
      this.runStateMachine(result);
    });

  }
}