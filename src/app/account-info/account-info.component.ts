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
      position:'bottom',
     title: 'Account was deleted from our system',
     timer: 3000,
     showConfirmButton: false,
     width: '300px', // Adjust width as needed
     heightAuto:true,
     toast:true
   }); 
   }
  }

  public signOut():void{
    this.authServ.signOut();
    const dismiss= document.getElementById('out');
    dismiss?.click();
    this.router.navigate(['/sign-in']);
    Swal.fire({
      position:'bottom',
      title: 'signed out',
      timer: 3000,
      showConfirmButton: false,
      width: '150px', // Adjust width as needed
      heightAuto:true,
      toast:true,
      padding:'1px',
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
