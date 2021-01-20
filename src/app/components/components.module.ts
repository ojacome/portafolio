import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './float-button/float-button.component';
import { FloatSocialMediaComponent } from './float-social-media/float-social-media.component';
import { CargandoComponent } from './cargando/cargando.component';
import { ErrorGenericoComponent } from './error-generico/error-generico.component';



@NgModule({
  declarations: [
    FloatButtonComponent, 
    FloatSocialMediaComponent, 
    CargandoComponent, 
    ErrorGenericoComponent],
  imports: [
    CommonModule
  ],
  exports: [ 
    FloatButtonComponent, 
    FloatSocialMediaComponent , 
    CargandoComponent, 
    ErrorGenericoComponent
  ]
})
export class ComponentsModule { }
