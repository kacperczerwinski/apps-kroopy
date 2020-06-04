import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'game',
                loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
