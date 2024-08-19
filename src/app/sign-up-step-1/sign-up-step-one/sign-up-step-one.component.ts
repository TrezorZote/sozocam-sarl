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
  public emailCheck:boolean=true;
 public contactCheck:boolean=true;
 public nameCheck:boolean=true;
 

  nextStep(name:any,email:any,contact:any) {
    // Save email to session storage or a shared service
    if(this.isValidEmail(email)){
      this.emailCheck=true;
      if(this.isValidName(name)){
        this.nameCheck=true;
        if(this.isValidContact(contact)){
          this.contactCheck=true;
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('contact', contact);
    this.router.navigate(['/sign-up-step2']);
    }
    else{
      this.contactCheck=false
    }
  }
  else{
      this.nameCheck=false;
    }
  }
    else{
    this.emailCheck=false;
    }
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.toLowerCase());
  }

  isValidName(password: string): boolean {
    return password.length >= 3;
  }
  isValidContact(contact: number): boolean {
    return contact >= 1000000;
  }
  
  

}
