import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoDeCanjePage } from './contenido-de-canje.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoDeCanjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoDeCanjePageRoutingModule {}
