import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
// import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
// import { FooterComponent } from './footer/footer.component';
// import { SwitcherComponent } from './switcher/switcher.component';
import { ScrollspyDirective } from './scrollspy.directive';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, ContactComponent, AboutComponent, ServicesComponent, ScrollspyDirective],
  imports: [
    CommonModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, ContactComponent, AboutComponent, ServicesComponent, ScrollspyDirective]
})

export class SharedModule { }
