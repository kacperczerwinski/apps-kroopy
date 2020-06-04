import { Injectable } from '@angular/core';
import { GameState } from 'src/app/modules/game/interfaces/game.state';
import { ItemsEnum } from 'src/app/enums/items.enum';
import { SexEnum } from 'src/app/enums/sex.enum';
import { CurrentGame } from 'src/app/modules/game/interfaces/current-game.interface';
import { games } from 'src/app/constants/games';
import { Game } from 'src/app/models/game.interface';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private games = [...games];
    private gameState: GameState = {
        currentPlayer: Math.random() >= 0.5 ? SexEnum.MALE : SexEnum.FEMALE,
        level: 1,
        progress: 0
    };
    constructor() {}

    updatePlayers(femaleName: string, maleName: string) {
        this.gameState = { ...this.gameState, femaleName, maleName };
    }

    updateSelectedItems(selectedItems: ItemsEnum[]) {
        this.gameState = { ...this.gameState, selectedItems };
    }

    getCurrentGame(): CurrentGame {
        return {
            sex: this.getSex(),
            playerName: this.getPlayerName(),
            level: this.getLevel(),
            progress: this.getProgress(),
            game: this.getGame()
        };
    }

    private getPlayerName() {
        return this.gameState.currentPlayer === SexEnum.FEMALE ? this.gameState.femaleName : this.gameState.maleName;
    }

    private getSex() {
        this.gameState.currentPlayer = this.gameState.currentPlayer === SexEnum.FEMALE ? SexEnum.MALE : SexEnum.FEMALE;
        return this.gameState.currentPlayer;
    }

    private getLevel() {
        if (this.gameState.progress === 100) {
            this.gameState.level = ++this.gameState.level;
            this.gameState.progress = 0;
        }
        return this.gameState.level;
    }

    private getProgress() {
        this.gameState.progress = this.gameState.progress + 10;

        return this.gameState.progress;
    }

    private getGame(): Game {
        const filteredGames: Game[] = this.games.filter(
            (game: Game) =>
                !game.played &&
                game.level === this.gameState.level &&
                (game.sex === SexEnum.UNISEX || game.sex === this.gameState.currentPlayer) &&
                (!game.item || !this.gameState.selectedItems || this.gameState.selectedItems.includes(game.item))
        );
        return filteredGames[Math.floor(Math.random() * filteredGames.length)];
    }

    resetGame() {
        this.gameState.progress = 0;
        this.gameState.level = 1;
        this.gameState.currentPlayer = Math.random() >= 0.5 ? SexEnum.MALE : SexEnum.FEMALE;
        this.games = [...games];
    }
}
