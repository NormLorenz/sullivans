import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  emailForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  get name() { return this.emailForm.get('name'); }
  get email() { return this.emailForm.get('email'); }
  get message() { return this.emailForm.get('message'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.emailForm.value);
    console.warn(this.emailForm.invalid);
  }
}

// NOTE: BUILD CLICKABLE LINKS FOR BOTH PHONE AND EMAIL IN EMAIL TEMPLATES
