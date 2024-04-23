import { Component } from '@angular/core';

@Component({
  selector: 'app-memotest',
  standalone: true,
  imports: [],
  templateUrl: './memotest.component.html',
  styleUrl: './memotest.component.css'
})
export class MemotestComponent {
public piezas: Array<Pieza> = new Array<Pieza>();

constructor(){
  let numeros:Number[] = new Array<Number>();
    while(numeros.length < 8){
    let valor = Math.random() * 4;
      if( valor < 4 && numeros.filter(x=> {return x == valor }).length < 2)
        numeros.push(valor);
    }

    numeros.forEach(element => {
      let imagen = "";
switch(element){
  case 0:
    imagen = "colocar imagen de internet 1";
    break;
  case 1:
    imagen = "cologar imagen de intenet 2";
    break;

  case 2:
    imagen = "colocar imagen i 3";
    break;
  case 3:
    imagen = "colocar i 4";
    break
}
this.piezas.push({ imgaen:imagen, descubierta: false, seleccionada: false});
    })
  
}
}
