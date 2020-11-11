import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyDirective } from './scrollspy.directive';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ScrollspyDirective],
  imports: [
    CommonModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [ScrollspyDirective]
})

export class SharedModule { }
