import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameItemComponent } from './game-item/game-item.component';
import { RouterModule } from '@angular/router';
import { BalloonWinComponent } from './balloon-win/balloon-win.component';
import { ChangeDannysStyleComponent } from './change-character-style/change-dannys-style.component';
import { DannysHat1Component } from './dannys-hat1/dannys-hat1.component';
import { DannysHat2Component } from './dannys-hat2/dannys-hat2.component';
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
    ChangeDannysStyleComponent,
    DannysHat1Component,
    DannysHat2Component,
    DannysHair1Component,
    TiredCharacterComponent,
    DannysFoodComponent,
  ],
  exports: [
    ToolbarComponent,
    GameItemComponent,
    BalloonWinComponent,
    ChangeDannysStyleComponent,
    DannysHat1Component,
    DannysHat2Component,
    DannysHair1Component,
    TiredCharacterComponent,
    DannysFoodComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
