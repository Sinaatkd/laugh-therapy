import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestroyBadCellPage } from './destroy-bad-cell.page';

const routes: Routes = [
  {
    path: '',
    component: DestroyBadCellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestroyBadCellPageRoutingModule {}
