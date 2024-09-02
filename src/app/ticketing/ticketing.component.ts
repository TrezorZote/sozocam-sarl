import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import Swal from 'sweetalert2';
import { Event } from '../event/Event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent {


  constructor(public authServ: AuthentificationService,public router:Router){}
  public chosenEvent:any = this.authServ.clickedEvent;
  
  select(eventToAdd:Event,vip:any,access:any,normal:any):void{
    if(vip!=0||access!=0||normal!=0){
    var prices:number[]=[normal * eventToAdd.prices[0],access* eventToAdd.prices[1],vip* eventToAdd.prices[2]];
    if(this.authServ.addToCart(eventToAdd,prices)){
      const dismiss= document.getElementById('out');
      dismiss?.click();
      Swal.fire({
        position:'bottom',
        title: 'event added to your basket',
        timer: 3000,
        showConfirmButton: false,
        heightAuto:true,
        width:'255px',
        toast:true, 
        padding:'1px',
      });
    }
    this.router.navigate(['profile/event']);
  }
  else{
    Swal.fire({
      position:'bottom',
      title: 'select atleast one ticket',
      timer: 4000,
      showConfirmButton: false,
      width:'230px',
      heightAuto:true,
      toast:true,
      padding:'1px'
    }); 
  }
  }

}
