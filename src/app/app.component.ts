import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sozocam';


  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='create'){
      button.setAttribute('data-target','#createProduct');
    }
    
    if(mode==='findLoc'){
      button.setAttribute('data-target','#locationForm');
    }
   
   
    container?.appendChild(button);
    button.click();
  }
}
