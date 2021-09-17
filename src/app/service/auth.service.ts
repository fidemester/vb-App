import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.login();
   }


  login(){
    let user = {
      email: 'fodorkrisztian6@gmail.com',
      password: 'alizka22'
    }
    this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
