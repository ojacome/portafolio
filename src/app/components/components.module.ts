import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button/float-button.component';
import { FloatSocialMediaComponent } from './float-social-media/float-social-media.component';
import { CargandoComponent } from './cargando/cargando.component';



@NgModule({
  declarations: [FloatButtonComponent, FloatSocialMediaComponent, CargandoComponent],
  imports: [
    CommonModule
  ],
  exports: [ FloatButtonComponent, FloatSocialMediaComponent , CargandoComponent]
})
export class ComponentsModule { }
