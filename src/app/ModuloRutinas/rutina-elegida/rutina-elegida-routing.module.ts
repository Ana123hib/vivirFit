import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaElegidaPage } from './rutina-elegida.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaElegidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaElegidaPageRoutingModule {}
