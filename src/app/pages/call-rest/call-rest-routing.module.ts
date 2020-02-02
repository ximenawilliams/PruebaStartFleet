import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallRestPage } from './call-rest.page';

const routes: Routes = [
  {
    path: '',
    component: CallRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallRestPageRoutingModule {}
