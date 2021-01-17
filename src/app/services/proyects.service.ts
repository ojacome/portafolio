import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  public proyects: Proyect[] = [];

  constructor(
    private http: HttpClient
  ) { 
    
  }

  getProyects(){
    const url = 'http://localhost:3000/api/proyects';
    
    return this.http.get< Proyect[] >( url )
    .pipe( map( (data: any) => data.proyects))
  }

  
}
