import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css',
})
export class DocloginComponent {
  constructor(private router: Router, private docauth: DocauthService) {}

  username: string = '';
  password: string = '';

  inValidLogin = false;
  showPassword: boolean = false;

  checkLogin() {
    if (this.docauth.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.inValidLogin = false;
    } else {
      alert('Wrong credientials');
      this.router.navigate(['home']);
      this.inValidLogin = true;
    }
  }
}
