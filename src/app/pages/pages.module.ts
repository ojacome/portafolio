import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    ComponentsModule,
    SharedModule,
    NgxGalleryModule
  ]
})
export class PagesModule { }
