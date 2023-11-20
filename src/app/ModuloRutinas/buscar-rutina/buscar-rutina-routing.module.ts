import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarRutinaPage } from './buscar-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarRutinaPageRoutingModule {}
