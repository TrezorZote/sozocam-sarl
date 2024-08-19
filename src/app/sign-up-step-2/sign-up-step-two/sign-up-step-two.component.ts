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

  public streetCheck:boolean=true;
  public postalCheck:boolean=true;

  nextStep(streetNum:any,postal:any) {
    // Save password to session storage or a shared service
    if(this.isValidStreet(streetNum)){
      this.streetCheck=true;
      if(this.isValidPostal(postal)){
        this.postalCheck=true;
    sessionStorage.setItem('street', streetNum);
    sessionStorage.setItem('postal', postal);
    this.router.navigate(['/sign-up-step3']);
    }
    else{
  this.postalCheck=false;
    }
    }
    else{
  this.streetCheck=false;
    }
  }

  isValidStreet(password: string): boolean {
    return password.length >= 5;
  }
  isValidPostal(contact: number): boolean {
    return contact >= 100;
  }

  back():void{
    this.router.navigate(['/sign-up-step1']);
  }
}


