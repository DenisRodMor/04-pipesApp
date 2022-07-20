import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

enMayusculas : boolean = true;

convertir(){
  this.enMayusculas = !this.enMayusculas;
}

}
