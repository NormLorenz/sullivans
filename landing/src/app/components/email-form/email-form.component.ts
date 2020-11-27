import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  emailForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: [''],
    message: ['']
  });

  get name() { return this.emailForm.get('name'); }
  get email() { return this.emailForm.get('email'); }
  get message() { return this.emailForm.get('message'); }

}