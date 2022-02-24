import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/domains/contactos';
import { ContactosService } from 'src/app/services/contactos.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  nombre: string;
  direccion: string;
  telefono: string;
  contacto: Contacto = new Contacto();
  image: any;

  base64Image: string;
  selectedFile: File = null;
  downloadURL: Observable<string>;

  constructor(private router: Router,
    private contactosServices: ContactosService,
    private route: ActivatedRoute,
    private camera: Camera,
    private storage: StorageService,
    ) { }


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
    console.log(this.contacto);

    let params: NavigationExtras = {
      queryParams: {
        nombre: this.nombre,
        direccion: this.direccion,
        telefono: this.telefono,
        contacto: this.contacto
      }
    }
    this.contactosServices.save(this.contacto);

    this.router.navigate(['listado-contactos'],params)
  }

  /////////////////////////////////////////////////////
  async takePhoto(sourceType: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.error(err);
    });
  }

  

  base64ToImage(dataURI) {
    const fileDate = dataURI.split(',');
    // const mime = fileDate[0].match(/:(.*?);/)[1];
    const byteString = atob(fileDate[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    return blob;
  }



  /////////////////////////////////////////////////



  

  clickImg() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(cameraOptions).then((res) => {
      let base64 = 'data:image/jpeg;base64,' + res;
      this.image = this.base64ToImage(base64);
      this.storage.uploadFile(this.image);
    }, (error) => {
      alert(error);
    });
  }

  subir() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     const res = this.storage.uploadFile(base64Image);
        
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}


function finalize(arg0: () => void): any {
  throw new Error('Function not implemented.');
}

