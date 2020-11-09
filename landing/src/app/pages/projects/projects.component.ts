import { Component, OnInit, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  images = [700, 800, 807, 988, 533, 424].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {

     // customize default values of carousels used by this component tree
     config.interval = 2000;
     config.keyboard = true;
     config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
