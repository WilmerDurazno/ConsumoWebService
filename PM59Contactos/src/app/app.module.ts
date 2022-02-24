import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMHChdhYURuiPhvKS78V4le4Anwt682Mg'
    }),
    HttpClientModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
