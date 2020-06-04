import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/modules/game/services/game.service';

@Component({
    selector: 'kr-names-selection',
    templateUrl: './names-selection.component.html',
    styleUrls: ['./names-selection.component.scss']
})
export class NamesSelectionComponent implements OnInit {
    femaleName: string;
    maleName: string;
    constructor(private router: Router, private gameService: GameService) {}

    ngOnInit(): void {}

    navigate() {
        this.gameService.updatePlayers(this.femaleName, this.maleName);
        this.router.navigate(['/game/play']);
    }
}
