import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoContactosPageRoutingModule } from './listado-contactos-routing.module';

import { ListadoContactosPage } from './listado-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoContactosPageRoutingModule
  ],
  declarations: [ListadoContactosPage]
})
export class ListadoContactosPageModule {}
