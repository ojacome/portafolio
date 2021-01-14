import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy{
  
  tituloSubs$: Subscription;
  
  
  constructor(   private router: Router )
  {    
    this.tituloSubs$ = this.getDataRuta()
    .subscribe( ({title}) => {      
      console.info('escuchando');
      document.title = 'Jesús Olmedo | '+ title;
    })
  }

  
  ngOnDestroy(): void {
    console.info("se desdtruye");
    this.tituloSubs$.unsubscribe();
  }

  getDataRuta(){
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    )     
  }
}
