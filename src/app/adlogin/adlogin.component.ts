import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css',
})
export class AdloginComponent {
  constructor(
    private adminauthService: AdminauthService,
    private router: Router
  ) {}
  username: string = '';
  password: string = '';

  inValidLogin = false;
  showPassword: boolean = false;

  checkLogin() {
    if (this.adminauthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.inValidLogin = false;
    } else {
      alert('Wrong credientials');

      this.router.navigate(['home']);
      this.inValidLogin = true;
    }
  }
}
