import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonPrincipalComponent } from 'src/app/boton-principal/boton-principal.component';
import { BotonSecundarionComponent } from 'src/app/boton-secundarion/boton-secundarion.component';
import { CantidadUsuariosPorCategoriasComponent } from './cantidad-usuarios-por-categorias/cantidad-usuarios-por-categorias.component';

@Component({
  selector: 'app-titulo-principal-y-subtitulo',
  standalone: true,
  imports: [CommonModule, BotonPrincipalComponent, BotonSecundarionComponent, CantidadUsuariosPorCategoriasComponent],
  templateUrl: './titulo-principal-y-subtitulo.component.html',
  styleUrls: ['./titulo-principal-y-subtitulo.component.scss']
})
export class TituloPrincipalYSubtituloComponent {

}
