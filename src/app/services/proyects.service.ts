import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Proyect } from '../models/proyect.model';
const url_api = environment.URL_API;

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

    

  constructor(
    private http: HttpClient
  ) { }


  
  getProyects( nextPage  ){
    const url = `${url_api}/proyects`;
    const params = new HttpParams()
                  .set( 'page', nextPage );

    return this.http.get( url , { params })
    .pipe( map( (res : any) => res.proyects ))
  }

  
}
