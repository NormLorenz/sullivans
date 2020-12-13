import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const element = document.getElementById('addressRowId');
    element.style.display = 'none';
   }

  emailForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    address: [''],
    subject: [''],
    message: ['']
  });

  get name() { return this.emailForm.get('name'); }
  get email() { return this.emailForm.get('email'); }
  get phone() { return this.emailForm.get('phone'); }
  get address() { return this.emailForm.get('address'); }
  get subject() { return this.emailForm.get('subject'); }
  get message() { return this.emailForm.get('message'); }

}