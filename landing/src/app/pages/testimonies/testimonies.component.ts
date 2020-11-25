import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #7e7e7e",
    borderRadius: "50%",
    color: "#7e7e7e"
  }
}