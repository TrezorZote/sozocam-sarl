import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../service/authentification.service';

//ng generate guard auth

@Injectable({
  providedIn: 'root'
})

/* this is used with the app-routing-Module canActivate property in the Routes to say that a specific component 
is protected if a sessionstorage item is not set in our case if the loggedin
item is not set to true or when we log out the session 
 { path: 'profile', component: AccountProfileComponent,canActivate: [AuthGuard]} 
   the AccountProfileComponent will be protected by this AuthGard
  that means anytime the router url to profile is called it checks if the storage session loggedin true is if not it redirects to sign in
 */
export class AuthGuard implements CanActivate {

  // need to add authentification service to grab the sessionstorage value in isloggedin and to route
  constructor(private authService: AuthentificationService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/sign-in']); // Redirect to login page if not authenticated
        return false;
      }
  }

 
  
}
