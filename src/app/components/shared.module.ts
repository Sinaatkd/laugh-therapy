import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameItemComponent } from './game-item/game-item.component';
import { RouterModule } from '@angular/router';
import { BalloonWinComponent } from './balloon-win/balloon-win.component';
import { ChangeCharacterStyleComponent } from './change-character-style/change-character-style.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    GameItemComponent,
    BalloonWinComponent,
    ChangeCharacterStyleComponent,
  ],
  exports: [
    ToolbarComponent,
    GameItemComponent,
    BalloonWinComponent,
    ChangeCharacterStyleComponent,
  ]
})
export class SharedModule {}
