import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Locacion } from '../domains/locacion';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locacion: Locacion = new Locacion();

  constructor(private platform: Platform,
    private afs: AngularFirestore) { }



  save(latitud: any, longitud: any){
    this.locacion.lat = latitud;
    this.locacion.long = longitud;
    const refLocacion = this.afs.collection('locaciones')

    ///*if(this.locacion.uid == null){
      this.locacion.uid = this.afs.createId()
    //}*/

    refLocacion.doc(this.locacion.uid).set(Object.assign({}, this.locacion))

  }


  getPuntos(): Observable<any[]>{
    const refContactos = this.afs.collection('locaciones')
    return refContactos.valueChanges();
  }

  async getCurrentLocation( withAdress: boolean = true): Promise<any>{
    let location: any = {};

    return new Promise((resolve,reject) =>{
      if(navigator.geolocation){
        var options = {
          frequency: 1000,
          timeouts: 15000,
          enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(
          position => {
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
            if(withAdress){
              let geocoder = new google.maps.Geocoder();
              let latlng = {lat: location.latitude, lng: location.longitude};
              geocoder.geocode({location: latlng}, (results, status) => {
                if(results != null && results != undefined){
                  location.address = results[0].formatted_address;
                }
                resolve(location);
              });
            } else {
              resolve(location);
            }
          },
          error => {
            resolve(null);
          },
          options
        );
      }

    });
  }

  async getAddressOfLocation(location: any){
    let geocoder = new google.maps.Geocoder();
    let latlng = {lat: location.latitude, lng: location.longitude};
    geocoder.geocode({location: latlng}, (results, status) => {
      if(results != null ){
        console.log(results);
        location.address = results[0].formatted_address;
        return location.address;
      }
      
    });
  }



}
