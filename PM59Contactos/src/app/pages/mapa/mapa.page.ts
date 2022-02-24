import { Component, OnInit } from '@angular/core';
import { Locacion } from 'src/app/domains/locacion';
import { LocationService } from 'src/app/services/locacion.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat = -2.879792;
  lng = -78.980795;
  zoom = 12;
  puntos: any;
  p: Locacion;
  currentLocation: any;
  centerLocation: any = {latitude: -2.879792, longitude: -78.980795,}


  icons = {
    client : "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  }

  constructor(private locationService: LocationService) { 
    

  }

  async ngOnInit() {
    this.currentLocation = await this.locationService.getCurrentLocation();
    //this.currentLocation = await this.locationService.getCurrentLocation(false);
    console.log(this.currentLocation);
  }

  newAddress(event: any){
    if(event){
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      console.log(this.centerLocation);
    }
  }

  guardarPunto(latitude: any, longitude:any){
    console.log("Guardando Punto===>"+latitude+"####"+longitude);
    this.locationService.save(latitude,longitude);
  }

  listarPuntos(){
    this.puntos = this.locationService.getPuntos();
    console.log(this.puntos);
  }

}
