import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideRoutes } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,
    private afs: AngularFirestore) {
  }
  /*loginGoogle() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const credential = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }*/

  async loginGoogle() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const credential = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(credential.user);
    let user =JSON.parse(JSON.stringify(credential.user));
    console.log(user);

    this.updateDtaUser(user);
  }

  logout() {
    this.auth.signOut();
  }

  updateDtaUser(user: any) {
    const refUsers = this.afs.collection('users');

    if(user.uid == null){
      user.uid = this.afs.createId();
    }

    const data = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      photoURL: user.PhotoURL || "https://goo.gl/7kz9qG",
      provider: user.providerData[0].providerId,
      lastLogin: new Date(Number(user.lastLoginAt)) || null,
      createAt: new Date(Number(user.createdAt)) || null

    }

    refUsers.doc(user.uid).set(data);

  }
}
