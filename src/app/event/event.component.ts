import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,NgModel } from '@angular/forms';
import { Event } from './Event';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title='workerapp';
  constructor(public authService:AuthentificationService,public router:Router){
  }

   public eventsArray:Event[]=this.authService.events;
   concert:Event[]= this.eventsArray.filter(e => e.eventCategory.indexOf('Concert') != -1).reverse();
   parties:Event[]= this.eventsArray.filter(e => e.eventDescription.indexOf('Party') != -1);
   filterarray:Event[]=this.authService.filterArray;
   public chosenEvent: any;
  
  ngOnInit(): void{
   this.getEvents();
  }
 
 
 public getEvents():void{
  this.eventsArray=this.eventsArray;
 }

//search event by category//
  public searchEvent(key:any): void{
    var result:Event[]=[];
    for(const event of this.eventsArray){
      if(event.eventCategory.toLowerCase().indexOf(key.toLowerCase())!=-1 ){
        result.push(event);
      }
    }
    this.authService.filterArray=result;
    if(result.length===0|| !key){
      this.authService.filterArray=[];
    }
    
  }

  //modal for pop up bootstrap//
  public onOpenModal( mode:string):void{
    if(mode==='filter'){
      this.router.navigate(['profile/filter']);
     // button.setAttribute('data-target','#filter');
    }
  }
  public onOpenModalEdit(eventToShow:Event, mode:string):void{
    if(mode==='moreInfo'){
      this.chosenEvent=eventToShow;
      this.authService.clickedEvent=eventToShow;
      this.router.navigate(['profile/ticket']);
    
    }
  }



}



