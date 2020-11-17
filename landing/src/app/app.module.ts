import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AvatarModule } from 'ng2-avatar';

import { PagesModule } from './pages/pages.module';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    // AvatarModule.forRoot(),
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }