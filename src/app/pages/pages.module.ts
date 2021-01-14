import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//paquetes externos
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {NgsRevealModule} from 'ngx-scrollreveal';

// modulos
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

//componentes
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxGalleryModule,
    NgsRevealModule,
    ComponentsModule,
    PipesModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class PagesModule { }
