import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect Pipe
  nombre : string = 'Dennis';
  genero : string = 'masculino';
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }


  //i18nPlural Pipe
  clientes : string [] = ['Gabriela', 'Dennis', 'Angie', 'Jesús'];
  clientesMapa ={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    '=3':'tenemos tres clientes esperando.',
    '=4':'tenemos cuatro clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }


  cambiarCliente(){
    this.nombre = 'Gabriela';
    this.genero =  'femenino';
  }

  eliminarCliente(){
    this.clientes.pop();
  }
}
