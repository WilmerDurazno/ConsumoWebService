import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadowsPage } from './listadows.page';

const routes: Routes = [
  {
    path: '',
    component: ListadowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadowsPageRoutingModule {}
