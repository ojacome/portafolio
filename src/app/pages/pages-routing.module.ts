import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home',                   component: HomeComponent,       data: { title: 'Home '} },
      { path: 'portfolio',              component: PortfolioComponent,  data: { title: 'Portfolio'} },
      { path: '', redirectTo: 'home', pathMatch: 'full' },      
      { path: '**', component: PageNotFoundComponent }      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
