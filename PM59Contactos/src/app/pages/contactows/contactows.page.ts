import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactoWS } from 'src/app/domains/contactows';
import { ContactosService } from 'src/app/services/contactos.service';
import { ContactowsService } from 'src/app/services/contactows.service';

@Component({
  selector: 'app-contactows',
  templateUrl: './contactows.page.html',
  styleUrls: ['./contactows.page.scss'],
})
export class ContactowsPage implements OnInit {

  contacto: ContactoWS = new ContactoWS();
  nombre: string;
  direccion: string;
  numero: string;

  constructor(private router: Router,
    private contactosServices: ContactowsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      //this.nombre = params.nombre;

      if(this.router.getCurrentNavigation().extras.queryParams){
        this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto;
        console.log(this.contacto);
      }
    })
  }

  guardar(){
    //console.log(this.nombre, this.direccion, this.telefono)
    console.log("Contacto:"+this.contacto.numero);
    let params: NavigationExtras = {
      queryParams: {
        nombre: this.nombre,
        direccion: this.direccion,
        numero: this.numero,
        contacto: this.contacto
      }
    }

    this.contactosServices.save(this.contacto).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['listadows'],params);
  }

}
