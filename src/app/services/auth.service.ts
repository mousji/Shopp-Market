import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase' ;
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.default.User> ;
  constructor(private afAuth:AngularFireAuth , private route : ActivatedRoute) {
  this.user$ =   afAuth.authState;


   }
   login()
   {
  //let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
  //localStorage.setItem('returnUrl' ,returnUrl) ;
   this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
   }

  signout() {

    this.afAuth.signOut() ;
  }

}
