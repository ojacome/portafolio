import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgsRevealConfig } from 'ngx-scrollreveal';
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
  public galleryOptions: NgxGalleryOptions[];
  public cargando: boolean;
  public errorP: boolean = false;

  

  constructor(
    private proyectSvc: ProyectsService, 
    public config:      NgsRevealConfig
  ) { 
    config.duration = 1500;  

    this.cargarProyectos();
  }

  ngOnInit(): void {    
    this.proyects = this.proyectSvc.proyects;

    this.galleryOptions = [
      {
        width: '100%',
        previewZoom: true,
        imageArrowsAutoHide: true,
        height: '500px',
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Fade
      },
      // max-width 800
      {
        thumbnails: false,
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        thumbnails: false,
        breakpoint: 400,
        preview: false
      }
    ];
    
  }


  cargarProyectos(){
    this.cargando = true;

    this.proyectSvc.getProyects()
    .subscribe( proyects => {
      this.cargando = false;
      this.proyects = proyects
    },
    error => {
      this.cargando = false;
      this.errorP = true;
      console.log(error.error.msg);      
    } );
  }

  
}
