import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaElegidaPageRoutingModule } from './rutina-elegida-routing.module';

import { RutinaElegidaPage } from './rutina-elegida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaElegidaPageRoutingModule
  ],
  declarations: [RutinaElegidaPage]
})
export class RutinaElegidaPageModule {}
