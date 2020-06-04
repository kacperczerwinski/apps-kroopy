import { SexEnum } from 'src/app/enums/sex.enum';
import { ItemsEnum } from 'src/app/enums/items.enum';

export interface Game {
    name: string;
    level: number;
    text: string;
    item?: ItemsEnum;
    played?: boolean;
    sex: SexEnum;
}
