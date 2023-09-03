import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestroyBadCellPageRoutingModule } from './destroy-bad-cell-routing.module';

import { DestroyBadCellPage } from './destroy-bad-cell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestroyBadCellPageRoutingModule
  ],
  declarations: [DestroyBadCellPage]
})
export class DestroyBadCellPageModule {}
