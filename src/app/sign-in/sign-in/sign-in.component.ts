/* ng generate component componentName 
creates all other css html files and updates the  appmodule */ 

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  /* could be used to bind with ngModel
  email: string = '';
  password: string = '';
*/
  constructor(private authentificationService: AuthentificationService, private router: Router) {}

  onSubmit(email:string,password:number) {
    if (this.authentificationService.signIn(email,password)) {
      this.router.navigate(['/profile/event']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'failed',
        text: 'no account with credentials',
        timer: 3000,
      showConfirmButton: false,
      width: '400px', // Adjust width as needed
      heightAuto:true
      });
    }
  }
}

