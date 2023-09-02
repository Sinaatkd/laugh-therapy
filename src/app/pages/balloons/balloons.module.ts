import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalloonsPageRoutingModule } from './balloons-routing.module';

import { BalloonsPage } from './balloons.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalloonsPageRoutingModule,
    SharedModule
  ],
  declarations: [BalloonsPage]
})
export class BalloonsPageModule {}
