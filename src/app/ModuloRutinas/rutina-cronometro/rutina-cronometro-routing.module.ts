import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaCronometroPage } from './rutina-cronometro.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaCronometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaCronometroPageRoutingModule {}
