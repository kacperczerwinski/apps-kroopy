import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { GameService } from 'src/app/modules/game/services/game.service';
import { CurrentGame } from 'src/app/modules/game/interfaces/current-game.interface';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'kr-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))])
        ])
    ]
})
export class PlayComponent implements OnInit {
    play: boolean;
    progressbarValue = 0;
    curSec = 0;
    currentGame: CurrentGame;
    visible: boolean;
    constructor(private gameService: GameService) {}

    ngOnInit(): void {
        this.gameService.resetGame();
        this.loadCurrentGame();
    }

    private loadCurrentGame() {
        this.currentGame = this.gameService.getCurrentGame();
    }

    startTimer() {
        this.loadCurrentGame();
        this.play = true;
        const timer$ = interval(1000);
        const sub = timer$.subscribe(sec => {
            this.progressbarValue = (sec * 100) / 5;
            this.curSec = sec;

            if (this.curSec === 6) {
                sub.unsubscribe();
                this.progressbarValue = 0;
                this.loadCurrentGame();
            }
        });
    }

    nextLevel() {
        this.gameService.nextLevel();
        this.loadCurrentGame();
    }
}
