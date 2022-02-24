import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoWS } from '../domains/contactows';

@Injectable({
  providedIn: 'root'
})
export class ContactowsService {

  constructor(private http: HttpClient) { }


  save(contacto: ContactoWS): Observable<any>{
    const url = 'http://localhost:8080/demows/rs/contactos'
    return this.http.post<any>(url,contacto)
    
  }


  getContactos(): Observable<any>{
    const url = 'http://localhost:8080/demows/rs/contactos'
    return this.http.get<any>(url)
  }

}
