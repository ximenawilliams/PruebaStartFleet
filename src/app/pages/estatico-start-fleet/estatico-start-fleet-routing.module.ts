import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstaticoStartFleetPage } from './estatico-start-fleet.page';

const routes: Routes = [
  {
    path: '',
    component: EstaticoStartFleetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstaticoStartFleetPageRoutingModule {}
