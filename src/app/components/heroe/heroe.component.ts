import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    '.img-logo { width: 200px; }'
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRouter: ActivatedRoute,
               private _heroeService: HeroesService) {
    this.activatedRouter.params.subscribe( parametros => {
      console.log(parametros)
      /** Se puede obtener el parametro enviado
       * por metodo get de las siguientes maneras
      */
      /* console.log(parametros.id) */
      console.log(parametros['id'])
      this.heroe = _heroeService.getHeroe(parametros['id']);
    })
  }
  
  ngOnInit(): void {
  }
}
