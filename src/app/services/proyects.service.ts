import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const url_api = environment.URL_API;

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private _jsonURL = 'assets/files/proyects.json';

  constructor(
    private http: HttpClient
  ) { }



  getProyects(nextPage) {
    const url = `${url_api}/proyects`;
    const params = new HttpParams()
      .set('page', nextPage);

    return this.http.get(url, { params })
      .pipe(map((res: any) => res.proyects))
  }

  getProyectsFile() {
    return this.http.get(this._jsonURL)
      .pipe(
        map((proyects: any[]) =>
          proyects.sort(function (a, b) {
            if (a.important < b.important) return -1;
            if (a.important > b.important) return 1;
            return 0;
          })
        )
      )
  }

}
