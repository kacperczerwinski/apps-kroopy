import { Component, OnInit } from '@angular/core';
import { ItemsEnum } from 'src/app/enums/items.enum';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { GameService } from 'src/app/modules/game/services/game.service';

@Component({
    selector: 'kr-items-selection',
    templateUrl: './items-selection.component.html',
    styleUrls: ['./items-selection.component.scss']
})
export class ItemsSelectionComponent implements OnInit {
    keys = Object.keys;
    items = ItemsEnum;
    selectedOptions: ItemsEnum[];
    constructor(private router: Router, private gameService: GameService) {}

    ngOnInit(): void {}

    navigate() {
        this.gameService.updateSelectedItems(this.selectedOptions);
        this.router.navigate(['/game/names-selection']);
    }
}
