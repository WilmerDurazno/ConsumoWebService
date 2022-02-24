import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contactoss',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'listado-contactos',
    loadChildren: () => import('./pages/listado-contactos/listado-contactos.module').then( m => m.ListadoContactosPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contactows',
    loadChildren: () => import('./pages/contactows/contactows.module').then( m => m.ContactowsPageModule)
  },
  {
    path: 'listadows',
    loadChildren: () => import('./pages/listadows/listadows.module').then( m => m.ListadowsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
