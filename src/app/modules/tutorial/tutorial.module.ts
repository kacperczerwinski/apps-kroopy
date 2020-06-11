import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

export const routes: Routes = [
  {
      path: '',
      component: TutorialComponent
  }
] as Routes;

@NgModule({
  declarations: [TutorialComponent],
  imports: [ CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MatButtonModule, MatCardModule, MatListModule]
})
export class TutorialModule { }
