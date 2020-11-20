import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

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

  onSubmit() {
    this.sendingFlag = true;
    console.warn(this.emailForm.value);
    console.warn(this.emailForm.invalid);
    setTimeout(() => {
      this.emailForm.reset();
      this.sendingFlag = false;
    }, 5000);
  }
}