import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { EmailFormComponent } from '../components/email-form/email-form.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    TestimoniesComponent,
    EmailFormComponent,
    ContactFormComponent
  ],
  // tslint:disable-next-line: max-line-length
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    IvyCarouselModule
  ]
})

export class PagesModule { }