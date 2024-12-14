import { Component } from '@angular/core';
import { DadoComponent } from '../dado/dado.component';

@Component({
  selector: 'app-tirardados',
  standalone: true,
  imports: [DadoComponent],
  templateUrl: './tirardados.component.html',
  styleUrl: './tirardados.component.css'
})
export class TirardadosComponent {
  n1:number=0
  n2:number=0
  n3:number=0
  resultado:string="Tira para jugar"
  contador:number=0

  tirar(){
    //1..6 con numeros aleatorios
    this.n1=Math.floor(Math.random()*6)+1
    this.n2=Math.floor(Math.random()*6)+1
    this.n3=Math.floor(Math.random()*6)+1
    if(this.n1==this.n2 && this.n1==this.n3){
      this.resultado="Felicidades. Ganaste!!"
      this.contador=0
    }else{
      this.contador++
      this.resultado="Lo siento... Perdiste!! Click:"+this.contador
    }
  }

}
