import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router) { 
    console.log('1. contructor heroes');
  }
  
  /** Esta es una de las etapas de inicialización de
   * un componente */
  ngOnInit(): void {
    console.log('2. onInit de heroes');

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indice: number) {
    /** La función navigate practicamente hace lo
     * mismo que el routerLink; ambos reciben un
     * array para cosntruir la ruta.
     */
    this.router.navigate(['/heroe', indice]);
  }

}
