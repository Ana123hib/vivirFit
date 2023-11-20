import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoDeCanjePageRoutingModule } from './contenido-de-canje-routing.module';

import { ContenidoDeCanjePage } from './contenido-de-canje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoDeCanjePageRoutingModule
  ],
  declarations: [ContenidoDeCanjePage]
})
export class ContenidoDeCanjePageModule {}
