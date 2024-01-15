import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloPrincipalYSubtituloComponent } from './titulo-principal-y-subtitulo/titulo-principal-y-subtitulo.component';
import { MenuCarruselComponent } from "./menu-carrusel/menu-carrusel.component";
import { LogoYBotonesComponent } from './logo-y-botones/logo-y-botones.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, TituloPrincipalYSubtituloComponent, MenuCarruselComponent, LogoYBotonesComponent]
})
export class HeaderComponent {

}
