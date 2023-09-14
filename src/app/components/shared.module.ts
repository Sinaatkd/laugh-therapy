import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameItemComponent } from './game-item/game-item.component';
import { RouterModule } from '@angular/router';
import { BalloonWinComponent } from './balloon-win/balloon-win.component';
import { ChangeCharacterStyleComponent } from './change-character-style/change-character-style.component';
import { CharacterHat1Component } from './character-hat1/character-hat1.component';
import { CharacterHat2Component } from './character-hat2/character-hat2.component';
import { DannysHair1Component } from './dannys-hair1/dannys-hair1.component';
import { TiredCharacterComponent } from './tired-character/tired-character.component';
import { DannysFoodComponent } from './dannys-food/dannys-food.component';


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
    CharacterHat1Component,
    CharacterHat2Component,
    DannysHair1Component,
    TiredCharacterComponent,
    DannysFoodComponent,
  ],
  exports: [
    ToolbarComponent,
    GameItemComponent,
    BalloonWinComponent,
    ChangeCharacterStyleComponent,
    CharacterHat1Component,
    CharacterHat2Component,
    DannysHair1Component,
    TiredCharacterComponent,
    DannysFoodComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
