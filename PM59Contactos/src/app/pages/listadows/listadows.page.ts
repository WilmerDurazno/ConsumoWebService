import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactoWS } from 'src/app/domains/contactows';
import { ContactowsService } from 'src/app/services/contactows.service';

@Component({
  selector: 'app-listadows',
  templateUrl: './listadows.page.html',
  styleUrls: ['./listadows.page.scss'],
})
export class ListadowsPage implements OnInit {
  contactos: any;
  contacto: ContactoWS;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactosServices: ContactowsService) {
      route.queryParams.subscribe(params => {
        //console.log(params);
        //this.nombre = params.nombre;

        if(this.router.getCurrentNavigation().extras.queryParams){
          this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto;
          console.log(this.contacto);
        }
      }) 
     }

  ngOnInit() {
    this.contactos = this.contactosServices.getContactos();
    console.log(this.contactos);
  }

  editar(contacto: ContactoWS){
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }

    this.router.navigate(['contactows'], params)
  }

}
