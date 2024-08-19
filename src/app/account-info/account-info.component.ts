import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent {

  constructor(public authServ:AuthentificationService){}

  deleteAccount(){
   if( this.authServ.deleteAccount()){
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

  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    
    if(mode==='edit'){
      button.setAttribute('data-target','#edit');
    }
   
    container?.appendChild(button);
    button.click();
  }

}
