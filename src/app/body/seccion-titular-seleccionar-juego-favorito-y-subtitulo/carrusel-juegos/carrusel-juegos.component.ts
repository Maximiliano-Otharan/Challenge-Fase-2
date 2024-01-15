import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonPrincipalComponent } from "../../../boton-principal/boton-principal.component";
import { BotonSecundarionComponent } from "../../../boton-secundarion/boton-secundarion.component";


@Component({
    selector: 'app-carrusel-juegos',
    standalone: true,
    templateUrl: './carrusel-juegos.component.html',
    styleUrls: ['./carrusel-juegos.component.scss'],
    imports: [CommonModule, BotonPrincipalComponent, BotonSecundarionComponent]
})
export class CarruselJuegosComponent {

  juegos: string[] = [
    '../../../../assets/Body/ImageGame.png',
    '../../../../assets/Body/ImageGame2.png',
    '../../../../assets/Body/ImageGame3.png'
  ];

  ngOnInit() {

  }

  currentGameIndex: number = 0;
  indiceActual: number = 0;
  anterior: number = this.juegos.length -1;
  siguiente: number = 1;
  
  click(direccion: number) {
    // dirección: 1 para siguiente, -1 para anterior
    this.indiceActual = (this.indiceActual + direccion + this.juegos.length) % this.juegos.length;

    if(this.indiceActual == 0) {
      this.anterior = this.juegos.length - 1;
      this.siguiente = this.indiceActual + 1;
    }else if(this.indiceActual == this.juegos.length -1) {
      this.siguiente = 0;
      this.anterior = this.indiceActual - 1;
    }else {
      this.anterior = this.indiceActual - 1;
      this.siguiente = this.indiceActual + 1;
    }
  }

}