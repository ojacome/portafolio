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

  
  public nextPage: number;


  constructor(
    private http: HttpClient
  ) { 
    
  }


  
  getProyects() : Observable< Proyect[] >{
    const url = `${url_api}/proyects`;
    const params = new HttpParams()
                  .set(
                    'page', 
                    this.nextPage === undefined || this.nextPage === null 
                    ? '1' 
                    : this.nextPage.toString()
                    );

    return this.http.get( url , { params })
    .pipe( 
      map( (res : any) => {
        this.nextPage = res.proyects.nextPage;         
        return res.proyects.docs;
      }))
  }

  
}
