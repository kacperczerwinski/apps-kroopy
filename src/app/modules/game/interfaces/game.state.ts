import { ItemsEnum } from 'src/app/enums/items.enum';
import { SexEnum } from 'src/app/enums/sex.enum';

export interface GameState {
    femaleName?: string;
    maleName?: string;
    currentPlayer?: SexEnum;
    level?: number;
    progress?: number;
    selectedItems?: ItemsEnum[];
}
