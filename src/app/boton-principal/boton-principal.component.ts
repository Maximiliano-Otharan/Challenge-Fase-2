import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.scss']
})
export class BotonPrincipalComponent {
  @Input() buttonText: string = '';
}
