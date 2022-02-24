import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoContactosPage } from './listado-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoContactosPageRoutingModule {}
