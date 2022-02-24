import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadowsPageRoutingModule } from './listadows-routing.module';

import { ListadowsPage } from './listadows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadowsPageRoutingModule
  ],
  declarations: [ListadowsPage]
})
export class ListadowsPageModule {}
