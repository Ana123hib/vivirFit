import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanjePage } from './canje.page';

const routes: Routes = [
  {
    path: '',
    component: CanjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanjePageRoutingModule {}
