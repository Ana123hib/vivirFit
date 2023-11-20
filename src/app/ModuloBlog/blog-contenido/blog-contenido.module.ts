import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogContenidoPageRoutingModule } from './blog-contenido-routing.module';

import { BlogContenidoPage } from './blog-contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogContenidoPageRoutingModule
  ],
  declarations: [BlogContenidoPage]
})
export class BlogContenidoPageModule {}
