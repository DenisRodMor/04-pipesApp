import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  nombre : string ='Dennis';
  valor  : number = 1000;
  obj = {nombre: 'DennisRodMor'};

  mostrarNombre(){
    console.log(this.nombre);
  }

}
