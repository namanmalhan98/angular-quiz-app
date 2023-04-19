import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@nestjs/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  routeURL: string;
  user: any;
  constructor(private authService: AuthService, private router: Router) {

    this.routeURL = this.router.url;
  }

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  //   // here we check if user is logged in or not
  //   // the authService returs user object, or
  //   // it returns undefined/null when user is not logged in

  //   // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
  //   // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
  //   return new Promise((resolve, reject) => { 
  //     this.authService.user.subscribe((user: any) => {

  //       if (!user && this.routeURL !== '/quiz') {
  //         this.routeURL = '/quiz';

  //         this.router.navigate(['/login'], {
  //           // note: this queryParams returns the current URL
  //           // that we can have in 'return' parameter,
  //           // so when the '/login' page opens,
  //           // this param tell us from where it comes
  //           queryParams: {
  //             return: 'login'
  //           }
  //         });

  //         return resolve(false);
  //       } else {
  //         this.routeURL = this.router.url;
  //         return resolve(true);
  //       }
  //     });
  //   });
  // }
}
