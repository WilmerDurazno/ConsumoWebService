import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactowsPage } from './contactows.page';

const routes: Routes = [
  {
    path: '',
    component: ContactowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactowsPageRoutingModule {}
