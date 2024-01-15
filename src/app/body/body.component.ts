import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent } from "./seccion-titular-seleccionar-juego-favorito-y-subtitulo/seccion-titular-seleccionar-juego-favorito-y-subtitulo.component";
import { SeccionTitularSeleccionDeJuegosComponent } from "./seccion-titular-seleccion-de-juegos/seccion-titular-seleccion-de-juegos.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    imports: [CommonModule, SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent, SeccionTitularSeleccionDeJuegosComponent]
})
export class BodyComponent {

}
