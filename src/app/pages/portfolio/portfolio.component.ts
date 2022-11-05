import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Proyect } from 'src/app/models/proyect.model';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  public proyects: Proyect[] = [];
  public galleryOptions: NgxGalleryOptions[];
  public cargando: boolean;
  public errorP: boolean = false;
  public nextPage: string;
  

  
  constructor(
    public proyectSvc: ProyectsService, 
    
  ) {      
    this.nextPage = '1';
    this.cargarProyectos2();
  }

  ngOnInit(): void {        

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

    this.proyectSvc.getProyects(this.nextPage)
    .subscribe( (res: any) => {
      console.log(res);
      
      this.cargando = false;
      this.nextPage = res.nextPage;
      this.proyects.push( ...res.docs);      
    },
    error => {
      this.cargando = false;
      this.errorP = true;
      console.log(error);      
    } );

  }  
  cargarProyectos2(){
    this.cargando = true;

    this.proyectSvc.getProyectsFile()
    .subscribe( (res: any) => {
      console.log(res);
      
      this.cargando = false;
      this.nextPage = null;
      this.proyects.push(...res);      
    },
    error => {
      this.cargando = false;
      this.errorP = true;
      console.log(error);      
    } );

  }  
  
}
