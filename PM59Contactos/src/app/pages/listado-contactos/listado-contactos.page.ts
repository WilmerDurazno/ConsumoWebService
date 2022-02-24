import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domains/contactos';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.page.html',
  styleUrls: ['./listado-contactos.page.scss'],
})
export class ListadoContactosPage implements OnInit {


  nombre: string;
  direccion: string;
  telefono: any;
  contacto: Contacto;

  contactos: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactosServices: ContactosService) { 
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

    editar(contacto: Contacto){
      let params: NavigationExtras = {
        queryParams: {
          contacto: contacto
        }
      }
  
      this.router.navigate(['contactoss'], params)
    }

}
