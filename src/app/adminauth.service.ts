import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  constructor() {}

  authenticate(username2: string, password2: string) {
    if (username2 == 'Ankit' && password2 == 'Dhondiyal') {
      sessionStorage.setItem('username2', username2);
      return true;
    } else {
      return false;
    }
  }

  isUserloggedIn() {
    console.log('user login done');
    let user = sessionStorage.getItem('username2');
    return !(user == null);
  }
  islogout() {
    console.log('Logout done');

    sessionStorage.removeItem('username2');
  }
}
