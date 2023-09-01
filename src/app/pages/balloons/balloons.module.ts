import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalloonsPageRoutingModule } from './balloons-routing.module';

import { BalloonsPage } from './balloons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalloonsPageRoutingModule
  ],
  declarations: [BalloonsPage]
})
export class BalloonsPageModule {}
