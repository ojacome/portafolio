import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class PagesModule { }
