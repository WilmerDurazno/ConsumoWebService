import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contacto } from '../domains/contactos';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private afs: AngularFirestore) { 
 
  }
  save(contacto: Contacto){
    const refContactos = this.afs.collection('contactos')

    if(contacto.uid == null){
      contacto.uid = this.afs.createId()
    }

    refContactos.doc(contacto.uid).set(Object.assign({}, contacto))

  }

  getContactos(): Observable<any[]>{
    const refContactos = this.afs.collection('contactos')
    return refContactos.valueChanges();
  }

  getContactoActivos(): Observable<any[]>{
    const refContactos = this.afs.collection('contactos',
            ref => ref.where("activo","==",true));
            return refContactos.valueChanges();
  }
}
