import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-games-cards',
    standalone: true,
    templateUrl: './games-cards.component.html',
    styleUrls: ['./games-cards.component.scss'],
    imports: [CommonModule, CardComponent]
})
export class GamesCardsComponent {

    img1Url = '../../../../assets/Body/imgCard.png';
    img2Url = '../../../../assets/Body/imgCard2.png';

    altGame = 'Juego'; 

    img1User = '../../../../assets/Body/user.png';
    img2User = '../../../../assets/Body/user2.png';

    user1 = 'Cameron Williamson';
    user2 = 'Dianne Russell';

    sponsor1 = 'Gillette';
    sponsor2 = 'Louis Vuitton';

}
