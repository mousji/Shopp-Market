import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  constructor(public service:AuthService) {



   }

  signout() {

   this.service.signout() ;
  }

}
