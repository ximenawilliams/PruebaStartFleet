import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallRestPageRoutingModule } from './call-rest-routing.module';

import { CallRestPage } from './call-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallRestPageRoutingModule
  ],
  declarations: [CallRestPage]
})
export class CallRestPageModule {}
