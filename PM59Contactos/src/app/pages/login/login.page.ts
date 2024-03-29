import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService) {
   }

  ngOnInit() {
  }

  loginGoogle() {
    this.auth.loginGoogle();
  }

  logout() {
    this.auth.logout();
  }

}
