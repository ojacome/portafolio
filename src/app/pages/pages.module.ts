import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule  
  ]
})
export class PagesModule { }
