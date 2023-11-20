import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaCompletadaPage } from './rutina-completada.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaCompletadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaCompletadaPageRoutingModule {}
