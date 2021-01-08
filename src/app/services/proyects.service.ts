import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  public proyects: Proyect[] = [];

  constructor() { 

    this.proyects = [
      {
        id: 1,
        title: "Sistema de Incidencias",
        description: "Posee varios módulos como Roles, Reportes, Dashboard y Chat en tiempo real.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "SqlServer"],
        images: [
          {
            id: 1,
            name: "sdsdf",
            url: "https://www.navixy.com/wp-content/uploads/2019/06/mainscreen.jpg",
            important: true
          }
        ]
      },
      {
        id: 2,
        title: "Sistema de Incidencias",
        description: "Posee varios módulos como Roles, Reportes, Dashboard y Chat en tiempo real.",
        type: "Frontend y Backend",
        technologies: ["Angular 9", "Node js", "Express", "SqlServer"],
        images: [
          {
            id: 1,
            name: "sdsdf",
            url: "https://www.navixy.com/wp-content/uploads/2019/06/mainscreen.jpg",
            important: true
          }
        ]
      },
    ]
  }

  
}
