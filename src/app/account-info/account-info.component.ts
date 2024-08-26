import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent {

  constructor(public authServ:AuthentificationService,public router:Router){}

  deleteAccount(){
   if(this.authServ.deleteAccount()){
    this.router.navigate(['/sign-in']);
    Swal.fire({
      icon: 'success',
      title: 'deleted',
      text: 'account was deleted',
      timer: 3000,
    showConfirmButton: false,
    width: '400px', // Adjust width as needed
    heightAuto:true
   }); 
   }
  }

  public signOut():void{
    this.authServ.signOut();
    const dismiss= document.getElementById('out');
    dismiss?.click();
    this.router.navigate(['/sign-in']);
    Swal.fire({
      icon: 'success',
      title: 'signed out',
      text: 'see you soon',
      timer: 3000,
    showConfirmButton: false,
    width: '400px', // Adjust width as needed
    heightAuto:true
   }); 
  }

  
  public back():void{
    this.router.navigate(['/profile']);
  }

  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    
    if(mode==='edit'){
     this.router.navigate(['profile/edit']);
    }
   
    container?.appendChild(button);
    button.click();
  }

}
