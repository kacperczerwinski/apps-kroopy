import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
] as Routes;

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MatButtonModule]
})
export class HomeModule {}
