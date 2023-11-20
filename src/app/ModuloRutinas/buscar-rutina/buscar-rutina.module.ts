import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarRutinaPageRoutingModule } from './buscar-rutina-routing.module';

import { BuscarRutinaPage } from './buscar-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarRutinaPageRoutingModule
  ],
  declarations: [BuscarRutinaPage]
})
export class BuscarRutinaPageModule {}
