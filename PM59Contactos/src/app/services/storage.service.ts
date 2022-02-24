import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage){ }

  uploadFile(foto: any) {
    
    const filePath = 'Pictures/1.jpeg';
    //const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,foto);
  }
}
