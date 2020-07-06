import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';
import { GameService } from 'src/app/modules/game/services/game.service';
import { CurrentGame } from 'src/app/modules/game/interfaces/current-game.interface';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'kr-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss'],
    animations: [
      trigger(
        'enterAnimation', [
          transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('600ms', style({transform: 'translateX(0)'}))
          ]),
          transition(':leave', [
            style({transform: 'translateX(0)'}),
            animate('600ms', style({transform: 'translateX(-100%)'}))
          ])
        ]
      )
    ],
})
export class PlayComponent implements OnInit {
    play: boolean;
    progressbarValue = 0;
    curSec = 0;
    currentGame: CurrentGame;
    constructor(private gameService: GameService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.gameService.resetGame();
        this.loadCurrentGame();
    }


    private loadCurrentGame() {
        this.currentGame = this.gameService.getCurrentGame();
    }

    startTimer() {
        this.play = true;
        const timer$ = interval(1000);
        const sub = timer$.subscribe(sec => {
            this.progressbarValue = (sec * 100) / 5;
            this.curSec = sec;

            if (this.curSec === 6) {
                sub.unsubscribe();
                this.progressbarValue = 0;
                this.play=false;
                this.currentGame = null;
                this.changeDetectorRef.detectChanges();
                setTimeout(()=>{
                  this.loadCurrentGame();
                },600);

            }
        });
    }
    nextLevel() {
        this.gameService.nextLevel();
        this.loadCurrentGame();
    }

    skipPlayer(){
      this.gameService.skipPlayer();
      this.loadCurrentGame();
    }

}
