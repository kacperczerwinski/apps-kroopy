import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsSelectionComponent } from './containers/items-selection/items-selection.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { NamesSelectionComponent } from './containers/names-selection/names-selection.component';
import { MatIconModule } from '@angular/material/icon';
import { PlayComponent } from './containers/play/play.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'items-selection', pathMatch: 'full' },
            {
                path: 'items-selection',
                component: ItemsSelectionComponent
            },
            {
                path: 'names-selection',
                component: NamesSelectionComponent
            },
            {
                path: 'play',
                component: PlayComponent
            }
        ]
    }
] as Routes;

@NgModule({
    declarations: [ItemsSelectionComponent, NamesSelectionComponent, PlayComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        MatListModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        FormsModule
    ]
})
export class GameModule {}
