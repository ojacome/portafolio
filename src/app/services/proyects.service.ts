import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


  
  getProyects() : Observable<Proyect[]> {
    const url = 'http://localhost:3000/api/proyects';
    
    return this.http.get( url )
    .pipe( map( (data: any) => data.proyects ))
  }

  
}
