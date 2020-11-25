import { Component, OnInit, VERSION } from '@angular/core';

interface IImage {
  path: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  images: IImage[] = [
    { path: 'assets/images/projects/0127200900b_HDR.jpg' },
    { path: 'assets/images/projects/0127200904_HDR.jpg' },
    { path: 'assets/images/projects/0220201126a_HDR.jpg' },
    { path: 'assets/images/projects/0220201127_HDR.jpg' },
    { path: 'assets/images/projects/0302201410_HDR.jpg' },
    { path: 'assets/images/projects/0305200729_HDR.jpg' },
    { path: 'assets/images/projects/0310201620a.jpg' },
    { path: 'assets/images/projects/0416201203.jpg' },
    { path: 'assets/images/projects/0428200854.jpg' },
    { path: 'assets/images/projects/0428201406.jpg' },
    { path: 'assets/images/projects/0430201146c.jpg' },
    { path: 'assets/images/projects/0507201212_HDR.jpg' },
    { path: 'assets/images/projects/0510201938.jpg' },
    { path: 'assets/images/projects/0513200831_HDR.jpg' },
    { path: 'assets/images/projects/1126191330_HDR.jpg' },
    { path: 'assets/images/projects/1126191415a.jpg' },
    { path: 'assets/images/projects/1203191216_HDR.jpg' },
    { path: 'assets/images/projects/1210191332a_HDR.jpg' },
    { path: 'assets/images/projects/6553263048.jpg' },
  ];

  name = 'Angular ' + VERSION.major;
  // images = [700, 800, 807, 988, 533, 424].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void { }

}
