import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonLiveDemoComponent } from "./boton-live-demo/boton-live-demo.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule, BotonLiveDemoComponent]
})
export class CardComponent {
  @Input() imageUrlGame!: string;
  @Input() imageAltGame!: string;
  @Input() imageUrlUser!: string;
  @Input() imageAltUser!: string;
  @Input() user!: string;
  @Input() sponsor!: string;
}
