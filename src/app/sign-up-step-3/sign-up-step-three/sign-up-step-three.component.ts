import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-sign-up-step-three',
  templateUrl: './sign-up-step-three.component.html',
  styleUrls: ['./sign-up-step-three.component.css']
})
export class SignUpStepThreeComponent {

  name: string = '';

  constructor(private authService: AuthentificationService, private router: Router) {}

  onSubmit(password:any,repassword:any) {
    const email = sessionStorage.getItem('email') || '';
    const name = sessionStorage.getItem('name') || '';
    const contact = sessionStorage.getItem('contact') || '';
    const street = sessionStorage.getItem('street') || '';
    const postal = sessionStorage.getItem('postal') || '';
    const adress= street + ' ' + postal;
    if (this.authService.signUp(email,name,repassword,adress,contact)) {
      this.router.navigate(['/profile/event']);
    } else {
      alert('Sign up failed');
    }
  }

  back():void{
    this.router.navigate(['/sign-up-step2']);
  }


}
