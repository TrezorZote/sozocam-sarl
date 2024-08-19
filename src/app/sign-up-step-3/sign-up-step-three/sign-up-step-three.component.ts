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

  public passwordCheck:boolean=true;
  public sameCheck:boolean=true;

  onSubmit(password:any,repassword:any) {
    if(this.isGoodPassword(password)){
      this.passwordCheck=true;
      if(this.samePassword(password,repassword)){
        this.sameCheck=true;
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
  }else{
    this.sameCheck=false;
  }
  }else{
   this.passwordCheck=false
  }
  }

  back():void{
    this.router.navigate(['/sign-up-step2']);
  }

  isGoodPassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
/*/^: Start of the string.
(?=.*[A-Z]): Ensures the password contains at least one uppercase letter.
(?=.*[a-z]): Ensures the password contains at least one lowercase letter.
(?=.*\d): Ensures the password contains at least one digit.
(?=.*[@$!%*?&]): Ensures the password contains at least one special character.
[A-Za-z\d@$!%*?&]{8,}$: Ensures the password is at least 8 characters long and only contains the specified characters.
$: End of the string. */

samePassword(first:any,second:any):boolean{
  return first === second;
}

}
