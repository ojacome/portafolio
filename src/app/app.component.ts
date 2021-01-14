import { AfterViewInit, Component, OnDestroy, Renderer2 } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy, AfterViewInit {
  
  tituloSubs$: Subscription;
  
  
  constructor(   
    private router: Router,
    private renderer: Renderer2 )
  {    
    this.tituloSubs$ = this.getDataRuta()
    .subscribe( ({title}) => {      
      console.info('escuchando');
      document.title = 'Jesús Olmedo | '+ title;
    })
  }


  ngAfterViewInit() {
            console.info('cargado');
    let loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
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
