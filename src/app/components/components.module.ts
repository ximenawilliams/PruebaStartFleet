import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadernComponent } from './headern/headern.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeadernComponent
  ],

})
export class ComponentsModule { }
