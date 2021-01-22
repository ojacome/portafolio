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
  public disponible: boolean = false;
  
  constructor(   
    private router: Router,
    private renderer: Renderer2 )
  {    
    this.disponible = false;
    this.tituloSubs$ = this.getDataRuta()
    .subscribe( ({title}) => {      
      document.title = 'Jesús Olmedo | '+ title;
    })
  }


  ngAfterViewInit() {
    setTimeout( () => {
      let loader = this.renderer.selectRootElement('.application-loading-container');
      this.renderer.setStyle(loader, 'display', 'none');
      this.disponible = true;
    } , 3000)
  }

  
  ngOnDestroy(): void {
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
