import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselJuegosComponent } from "./carrusel-juegos/carrusel-juegos.component";

@Component({
    selector: 'app-seccion-titular-seleccionar-juego-favorito-y-subtitulo',
    standalone: true,
    templateUrl: './seccion-titular-seleccionar-juego-favorito-y-subtitulo.component.html',
    styleUrls: ['./seccion-titular-seleccionar-juego-favorito-y-subtitulo.component.scss'],
    imports: [CommonModule, CarruselJuegosComponent]
})
export class SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent {

}
