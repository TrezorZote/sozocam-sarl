import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './Animations';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Person } from './person';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]   //add my animation here to decorator
})
export class AppComponent implements OnInit  {
  title = 'Sozocam';
 
   constructor(public authentificationService: AuthentificationService, private router: Router){}

   public user : Person = this.authentificationService.getCurrentUser();

    ngOnInit(): void {
      this.getCurrentUser();
    }

  getCurrentUser():void{
      if(this.authentificationService.getCurrentUser()){
       this.user = this.authentificationService.getCurrentUser();
    }
  }

 

  public back():void{
    this.router.navigate(['/profile']);
  }

    private count :number=2;

    public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='out'){
      button.setAttribute('data-target','#out');
    }
    
    if(mode==='findLoc'){
      button.setAttribute('data-target','#locationForm');
    }
   
   
    container?.appendChild(button);
    button.click();
  }
}
