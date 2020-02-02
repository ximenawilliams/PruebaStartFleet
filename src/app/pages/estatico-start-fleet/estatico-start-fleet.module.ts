import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstaticoStartFleetPageRoutingModule } from './estatico-start-fleet-routing.module';

import { EstaticoStartFleetPage } from './estatico-start-fleet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstaticoStartFleetPageRoutingModule
  ],
  declarations: [EstaticoStartFleetPage]
})
export class EstaticoStartFleetPageModule {}

