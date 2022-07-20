import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

enMayusculas : boolean = true;

heroes: Heroe [] = [
  {
  nombre: 'Hulk',
  vuela: false,
  color: Color.verde
  },
  {
    nombre: 'Super Man',
    vuela: true,
    color: Color.azul
    },
    {
      nombre: 'Spider-Man',
      vuela: false,
      color: Color.rojo
      },
      {
        nombre: 'Black Panther',
        vuela: false,
        color: Color.negro
        },

]

convertir(){
  this.enMayusculas = !this.enMayusculas;
}

}
