import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPuntosGanadosPageRoutingModule } from './rutina-puntos-ganados-routing.module';

import { RutinaPuntosGanadosPage } from './rutina-puntos-ganados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPuntosGanadosPageRoutingModule
  ],
  declarations: [RutinaPuntosGanadosPage]
})
export class RutinaPuntosGanadosPageModule {}
