import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect.model';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  public proyects: Proyect[];

  constructor(
    private proyectSvc: ProyectsService
  ) { }

  ngOnInit(): void {    
    this.proyects = this.proyectSvc.proyects;
    console.info(this.proyects);
  }

}
