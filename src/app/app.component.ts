import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/map' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopp-Market';

  constructor (private servUser : UserService ,
    private authservice:AuthService ,
    private route : ActivatedRoute ,
     router : Router) {

  this.authservice.user$.subscribe(user =>
    {
    if(user) {
      this.servUser.save(user) ;
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      router.navigateByUrl(returnUrl);
    }
    }


  )
  }
}
