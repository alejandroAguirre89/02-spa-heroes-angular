import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes-filtro',
  templateUrl: './heroes-filtro.component.html',
  styleUrls: ['./heroes-filtro.component.css']
})
export class HeroesFiltroComponent implements OnInit {

  filtroBusqueda: string;
  heroesFiltro: Heroe[] = [];

  constructor( private activatedRouter: ActivatedRoute,
               private _heroeService: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( parametros => {
      this.filtroBusqueda = parametros['filtro'];
      this.heroesFiltro = this._heroeService.bucarHeroes(parametros['filtro']);
    })
  }

}
