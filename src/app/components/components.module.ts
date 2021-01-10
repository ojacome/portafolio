import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button/float-button.component';
import { FloatSocialMediaComponent } from './float-social-media/float-social-media.component';



@NgModule({
  declarations: [FloatButtonComponent, FloatSocialMediaComponent],
  imports: [
    CommonModule
  ],
  exports: [ FloatButtonComponent, FloatSocialMediaComponent ]
})
export class ComponentsModule { }
