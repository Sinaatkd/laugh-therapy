import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DannysNursePageRoutingModule } from './dannys-nurse-routing.module';

import { DannysNursePage } from './dannys-nurse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DannysNursePageRoutingModule
  ],
  declarations: [DannysNursePage]
})
export class DannysNursePageModule {}
