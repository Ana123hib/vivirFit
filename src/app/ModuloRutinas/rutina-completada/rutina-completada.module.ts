import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaCompletadaPageRoutingModule } from './rutina-completada-routing.module';

import { RutinaCompletadaPage } from './rutina-completada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaCompletadaPageRoutingModule
  ],
  declarations: [RutinaCompletadaPage]
})
export class RutinaCompletadaPageModule {}
