import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonPrincipalFiltroComponent } from "./boton-principal-filtro/boton-principal-filtro.component";
import { BotonSecundarioFiltroComponent } from "./boton-secundario-filtro/boton-secundario-filtro.component";
import { GamesCardsComponent } from "./games-cards/games-cards.component";

@Component({
    selector: 'app-seccion-titular-seleccion-de-juegos',
    standalone: true,
    templateUrl: './seccion-titular-seleccion-de-juegos.component.html',
    styleUrls: ['./seccion-titular-seleccion-de-juegos.component.scss'],
    imports: [CommonModule, BotonPrincipalFiltroComponent, BotonSecundarioFiltroComponent, GamesCardsComponent]
})
export class SeccionTitularSeleccionDeJuegosComponent {

}
