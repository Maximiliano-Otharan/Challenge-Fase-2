import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-secundarion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-secundarion.component.html',
  styleUrls: ['./boton-secundarion.component.scss']
})
export class BotonSecundarionComponent {
  @Input() buttonText: string = '';
}
