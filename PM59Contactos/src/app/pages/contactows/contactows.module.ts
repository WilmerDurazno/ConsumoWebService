import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactowsPageRoutingModule } from './contactows-routing.module';

import { ContactowsPage } from './contactows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactowsPageRoutingModule
  ],
  declarations: [ContactowsPage]
})
export class ContactowsPageModule {}
