import { UserInfo } from './userInfo';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db :AngularFireDatabase , private authsvr :AuthService) { }

  save(user :firebase.default.User) {
    this.db.object('/users'+ user.uid).update(
      {name:user.displayName ,
       email : user.email

      }
    )
  }

  getUser(uid:string){
   return this.db.object('/user/'+ uid).valueChanges() ;

  }

  get AppUser$() : Observable<UserInfo> {

    return this.authsvr.user$.switchMap(user =>

      {
        if(user)
        {return this.getUser(user.uid).map.arguments.valueChanges();}

      else
      {
        return Observable.of(null) ;
      }

    })

}
}
