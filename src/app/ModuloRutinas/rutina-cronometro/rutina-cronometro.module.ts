import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaCronometroPageRoutingModule } from './rutina-cronometro-routing.module';

import { RutinaCronometroPage } from './rutina-cronometro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaCronometroPageRoutingModule
  ],
  declarations: [RutinaCronometroPage]
})
export class RutinaCronometroPageModule {}
