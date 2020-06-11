import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';

export const routes: Routes = [
  {
      path: '',
      component: TutorialComponent
  }
] as Routes;

@NgModule({
  declarations: [TutorialComponent],
  imports: [ CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MatListModule]
})
export class TutorialModule { }
