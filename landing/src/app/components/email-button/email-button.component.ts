import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EmailService } from '../../services/email.service';
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
  selector: 'app-email-button',
  templateUrl: './email-button.component.html',
  styleUrls: ['./email-button.component.css']
})

export class EmailButtonComponent implements OnInit {

  @Input() emailForm: FormGroup;

  // <form [formGroup]='emailForm' (ngSubmit)='emailButton.onSubmit()'
  // <app-email-button [emailForm]='emailForm' #emailButton></app-email-button>

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailForm.statusChanges.subscribe(() => {
      if (this.emailForm.dirty === true) {
        this.runStateMachine(Action.dirty);
      }
    });
  }

  private runStateMachine(action: Action) {
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

  private state = State.send;

  get isSendState() { return this.state === State.send; }
  get isSendingState() { return this.state === State.sending; }
  get isErrorState() { return this.state === State.error; }
  get isSentState() { return this.state === State.sent; }

  public onSubmit() {
    if (this.emailForm.valid) {
      this.runStateMachine(Action.submit);

      // if (this.emailForm.value.address === '') {
      //   console.log(this.emailForm.value);
      //   console.log(this.emailForm.value.address);
      //   setTimeout(() => {
      //     this.emailForm.reset();
      //     this.runStateMachine(Action.success);
      //   }, 5000);
      // }

      // else {
      //   console.log(this.emailForm.value);
      //   console.log(this.emailForm.value.address);
      //   setTimeout(() => {
      //     this.emailForm.reset();
      //     this.runStateMachine(Action.error);
      //   }, 5000);
      // }

      if (this.emailForm.value.address === '') {
        this.emailService.sendEmails(this.emailForm.value).subscribe((responses: IEmailResponse[]) => {
          this.emailForm.reset();
          let result = Action.success;
          responses.forEach((response: IEmailResponse) => {
            if (response.success !== true) { result = Action.error; }
          });
          this.runStateMachine(result);
        });
      }

      else {
        this.emailService.sendSpamEmail(this.emailForm.value).subscribe((response: IEmailResponse) => {
          this.emailForm.reset();
          let result = response.success === true ? Action.success : Action.error;
          this.runStateMachine(result);
        });
      }
    }
  }

}