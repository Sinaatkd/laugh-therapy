import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'balloons',
    loadChildren: () => import('./pages/balloons/balloons.module').then( m => m.BalloonsPageModule)
  },
  {
    path: 'destroy-bad-cell',
    loadChildren: () => import('./pages/destroy-bad-cell/destroy-bad-cell.module').then( m => m.DestroyBadCellPageModule)
  },
  {
    path: 'dannys-nurse',
    loadChildren: () => import('./pages/dannys-nurse/dannys-nurse.module').then( m => m.DannysNursePageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./pages/phone/phone.module').then( m => m.PhonePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
