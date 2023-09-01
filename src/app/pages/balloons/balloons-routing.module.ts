import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalloonsPage } from './balloons.page';

const routes: Routes = [
  {
    path: '',
    component: BalloonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalloonsPageRoutingModule {}
