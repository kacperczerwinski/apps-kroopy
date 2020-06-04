import { SexEnum } from 'src/app/enums/sex.enum';
import { Game } from 'src/app/models/game.interface';

export interface CurrentGame {
    playerName: string;
    sex: SexEnum;
    game: Game;
    progress: number;
    level: number;
}
