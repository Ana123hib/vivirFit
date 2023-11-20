import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaPuntosGanadosPage } from './rutina-puntos-ganados.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaPuntosGanadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaPuntosGanadosPageRoutingModule {}
