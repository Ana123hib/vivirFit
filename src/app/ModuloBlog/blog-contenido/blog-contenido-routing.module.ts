import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogContenidoPage } from './blog-contenido.page';

const routes: Routes = [
  {
    path: '',
    component: BlogContenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogContenidoPageRoutingModule {}
