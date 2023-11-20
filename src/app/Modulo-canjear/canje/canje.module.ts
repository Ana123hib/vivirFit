import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanjePageRoutingModule } from './canje-routing.module';

import { CanjePage } from './canje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanjePageRoutingModule
  ],
  declarations: [CanjePage]
})
export class CanjePageModule {}
