import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSection = 'home';

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
}