import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-step-two',
  templateUrl: './sign-up-step-two.component.html',
  styleUrls: ['./sign-up-step-two.component.css']
})
export class SignUpStepTwoComponent {


 /* password: string = '';*/

  constructor(private router: Router) {}

  nextStep(streetNum:any,postal:any) {
    // Save password to session storage or a shared service
    sessionStorage.setItem('street', streetNum);
    sessionStorage.setItem('postal', postal);
    this.router.navigate(['/sign-up-step3']);
  }

  back():void{
    this.router.navigate(['/sign-up-step1']);
  }
}


