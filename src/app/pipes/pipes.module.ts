import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsParPipe } from './es-par.pipe';
import { EsImparPipe } from './es-impar.pipe';



@NgModule({
  declarations: [ EsParPipe, EsImparPipe ],
  imports: [
    CommonModule
  ],
  exports: [ EsParPipe, EsImparPipe ]
})
export class PipesModule { }
