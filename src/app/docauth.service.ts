import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocauthService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username == 'Ankit' && password == 'Ankit2000') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      alert('Wrong credientials');
      return false;
    }
  }

  isUserLoggedIn() {
    console.log('doctor login done');

    let user = sessionStorage.getItem('username');
    console.log(user);

    return !(user == null);
  }

  logout() {
    console.log('Doctor has been logout');

    sessionStorage.removeItem('username');
  }
}
