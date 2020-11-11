import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    ProjectsComponent, 
    HomeComponent,
    AboutComponent, 
    ContactComponent, 
    ServicesComponent,
    TestimoniesComponent
  ],
  // tslint:disable-next-line: max-line-length
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    NgxYoutubePlayerModule.forRoot(),
    ScrollToModule.forRoot(),
  ]
})

export class PagesModule { }