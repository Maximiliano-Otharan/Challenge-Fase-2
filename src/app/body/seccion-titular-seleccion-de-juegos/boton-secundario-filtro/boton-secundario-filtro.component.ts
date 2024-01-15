import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-secundario-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-secundario-filtro.component.html',
  styleUrls: ['./boton-secundario-filtro.component.scss']
})
export class BotonSecundarioFiltroComponent {
  @Input() buttonText: string = '';
}
