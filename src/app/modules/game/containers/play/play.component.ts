import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { GameService } from 'src/app/modules/game/services/game.service';
import { CurrentGame } from 'src/app/modules/game/interfaces/current-game.interface';

@Component({
    selector: 'kr-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    play: boolean;
    progressbarValue = 0;
    curSec = 0;
    currentGame: CurrentGame;
    constructor(private gameService: GameService) {}

    ngOnInit(): void {
        this.currentGame = this.gameService.getCurrentGame();
        this.gameService.resetGame();
        console.log(this.currentGame);
    }

    startTimer() {
        this.currentGame = this.gameService.getCurrentGame();
        this.play = true;
        const timer$ = interval(1000);

        const sub = timer$.subscribe(sec => {
            this.progressbarValue = (sec * 100) / 5;
            this.curSec = sec;

            if (this.curSec === 6) {
                sub.unsubscribe();
                this.play = false;
                this.progressbarValue = 0;
            }
        });
    }
}
