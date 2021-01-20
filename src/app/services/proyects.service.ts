import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proyect } from '../models/proyect.model';
import { ResProyect } from '../models/resProyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  public responseProyect : ResProyect;
  public proyects: Proyect[] = [];

  constructor(
    private http: HttpClient
  ) { 
    
  }


  
  getProyects(){
    const url = 'http://localhost:3000/api/proyects';
    const params = new HttpParams()
                  .set(
                    'page', 
                    this.responseProyect === undefined || this.responseProyect === null 
                    ? '1' 
                    : this.responseProyect.proyects.nextPage.toString()
                    );

    return this.http.get( url , { params })
    .pipe( 
      map( (res : ResProyect) => {
        this.responseProyect = res; 
        this.proyects.push( ...res.proyects.docs );
        return this.proyects;
      }))
  }

  
}
