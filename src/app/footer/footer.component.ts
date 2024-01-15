import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotipoEInformacionDeLaEmpresaComponent } from "./logotipo-e-informacion-de-la-empresa/logotipo-e-informacion-de-la-empresa.component";
import { EnlacesDeNavegacionComponent } from "./enlaces-de-navegacion/enlaces-de-navegacion.component";
import { RedesYCopyrightComponent } from "./redes-y-copyright/redes-y-copyright.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule, LogotipoEInformacionDeLaEmpresaComponent, EnlacesDeNavegacionComponent, RedesYCopyrightComponent]
})
export class FooterComponent {

}
