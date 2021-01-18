import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /** El decorador input hara que este componente reciba
   * un dato de un componente padre, en este caso sera el
   * objeto con la información de un heroe y su posición
   * dentro del arreglo de heroes.
   */
  @Input() heroe: any = {};
  @Input() indice: number;

  /** Con este decorador creamos un evento
   * el cual va a emitir el indice del heroe
   * seleccionado para ejecutar la función
   * verHeroe creada en el componente padre
   * HeroesComponent.
   * El eventEmitter solicita especificar el tipo
   * de dato que va a enviar.
   * El heroeSeleccionado es un observable al
   * cual nos podemos suscribir, pero en este
   * caso se requiere para emitir un evento
   * personalizado.
   */
  @Output() heroeSeleccionado: EventEmitter<number>;

  /** En el constructor se requiere inicializar
   * el EventEmitter
   */
  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  /** Redirecciona a la vista donde se ve
   * la información detallada dele heroe
   */
  verHeroe() {
    console.log('indice obtenido por @input', this.indice);
    this.router.navigate(['/heroe', this.indice]);

    /** desde aqui se hace la emisión que ejecutara en otro
     * componente un evento personalizado.
     */
    /* console.log('emitiendo evento desde HeroeTarjetaComponent')
    this.heroeSeleccionado.emit(this.indice); */
  }

}
