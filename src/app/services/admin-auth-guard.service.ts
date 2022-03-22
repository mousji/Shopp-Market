import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private usersvr: UserService) { }
 data : any ;
  canActivate(): Observable<boolean> {
    return this.usersvr.AppUser$.map((appUser: any) => appUser.isAdmin);
    this.data = this.usersvr.AppUser$ ;
    console.log(this.data) ;
  }
}
