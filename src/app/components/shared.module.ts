import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameItemComponent } from './game-item/game-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
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
