import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../Animations';  //import my animation 
@Component({
  selector: 'app-sign-up-step-one',
  templateUrl: './sign-up-step-one.component.html',
  styleUrls: ['./sign-up-step-one.component.css'],
  animations:[fadeAnimation]   //add my animation here to decorator
})
export class SignUpStepOneComponent {

  /*
  email: string = '';*/

  constructor(private router: Router) {}

  nextStep(name:any,email:any,contact:any) {
    // Save email to session storage or a shared service
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('contact', contact);
    this.router.navigate(['/sign-up-step2']);
  }

}
