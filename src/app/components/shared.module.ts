import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameItemComponent } from './game-item/game-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    GameItemComponent
  ],
  exports: [
    ToolbarComponent,
    GameItemComponent
  ]
})
export class SharedModule {}
