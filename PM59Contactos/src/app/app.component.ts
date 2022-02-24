import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Contactos', url: 'contactoss', icon: 'mail' },
    { title: 'Lista-Contactos', url: 'listado-contactos', icon: 'paper-plane' },
    { title: 'Geolocalizacion', url: 'mapa', icon: 'heart' },
    { title: 'Login', url: 'login', icon: 'archive' },
    { title: 'Contactos WS', url: 'contactows', icon: 'trash' },
    { title: 'Lista Contactos WS', url: 'listadows', icon: 'warning' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
