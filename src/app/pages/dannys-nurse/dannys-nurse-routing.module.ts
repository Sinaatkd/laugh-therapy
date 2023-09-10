import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DannysNursePage } from './dannys-nurse.page';

const routes: Routes = [
  {
    path: '',
    component: DannysNursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DannysNursePageRoutingModule {}
