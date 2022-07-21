import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { browser } from 'protractor';

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
        nombre: 'Thor',
        vuela: false,
        color: Color.negro
        },
        {
          nombre: 'Capitan America',
          vuela: false,
          color: Color.azul
          },
          {
            nombre: 'IronMan',
            vuela: true,
            color: Color.rojo
            },
            {
              nombre: 'Ant-Man',
              vuela: false,
              color: Color.rojo
              },
              {
                nombre: 'Black-Widow',
                vuela: false,
                color: Color.negro
                },
                {
                  nombre: 'Doctor Strange',
                  vuela: false,
                  color: Color.rojo
                  }

]

convertir(){
  this.enMayusculas = !this.enMayusculas;
}

}
