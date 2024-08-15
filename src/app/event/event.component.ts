import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,NgModel } from '@angular/forms';
import { Event } from './Event';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title='workerapp';
  constructor(public authService:AuthentificationService){
  }

   eventsArray: Event[] = [ new Event(12,692923746,"Concert","Joeboy 2k23 UK tour must be there","London O2 arena",12345,[10,20,30]),
    new Event(1,681435264,"Concert","Burna Boy europe tour"," Cologne lanxess arena ",12345,[10,20,30]),
    new Event(2,676453624,"Poolparty","cool poolparty for students","Stuttgart str 30",12345,[10,20,30]),
    new Event(3,692923746,"Houseparty","crazy houseparty open to everyone","Bochum Bahnhof str 52",12345,[10,20,30]),
    new Event(4,672204043,"Birthday","want to celebrate my birthday with y'all","Essen borbeck str 14",12345,[10,20,30]),
    new Event(5,622765893,"Club","come spend the night with us and enjoy good music","Hamburg Bahnhof Str 18",12345,[10,20,30]),
    new Event(6,622765893,"Concert","Rema US tour","koln Bahnhof Str 18",12345,[10,20,30]),
    new Event(7,622765893,"Club","come spend the night with us and enjoy good music","koln Bahnhof Str 18",12345,[10,20,30]),
    new Event(8,622765893,"football","Dortmund gegen Bayern der Klassiker","Bayern Bahnhof Str 18",12345,[10,20,30]),
    new Event(9,622765893,"Concert","Chris Breezy under the influence tour ","Frankfurt Str 18",12345,[10,20,30]),
    new Event(10,692923746,"Houseparty","crazy houseparty open to everyone","Bochum nrw alle 52",12345,[10,20,30]),
    new Event(11,692923746,"Houseparty","crazy houseparty open to everyone","Dortmund nrw alle 52",12345,[10,20,30]),
    new Event(13,692923746,"Concert","Joeboy 2k23 UK tour must be there","London O2 arena ",12345,[10,20,30])];

   public chosenEvent: any;
  
  ngOnInit(): void{
   this.getEvents();
  }
 
 
 public getEvents():void{
  this.eventsArray=this.eventsArray;
 }

//search event by category//
  public searchEvent(key:any): void{
    const result:Event[] =[];
    for(const event of this.eventsArray){
      if(event.eventCategory.toLowerCase().indexOf(key.toLowerCase())!==-1 || event.contact.toPrecision().indexOf(key)!==-1){
        result.push(event);
      }
    }
    this.eventsArray=result;
    if(result.length===0|| !key|| key==' '){
      this.getEvents();
    }
  }

  select(eventToAdd:Event,vip:any,access:any,normal:any):void{
    var prices:number[]=[normal * eventToAdd.prices[0],access* eventToAdd.prices[1],vip* eventToAdd.prices[2]];
    if(this.authService.addToCart(eventToAdd,prices)){
      Swal.fire({
        icon: 'success',
        title: 'added to corb',
        text: 'event visible in your corb',
        timer: 3000,
      showConfirmButton: false,
      width: '400px', // Adjust width as needed
      heightAuto:true
      });
    }
  }

  //search events by region entered//
  public byRegion(region:string):void{
    var regionArray: Event[]=[];
    this.eventsArray.forEach(element => {
      if(element.eventLocation.toLowerCase().indexOf(region.toLowerCase())!=-1){
       regionArray.push(element);
      }
    });
    this.eventsArray=regionArray;
if(region.length>=3){
      Swal.fire({position:'center',icon:'success',
      title:'filtered for events in the given region', showConfirmButton: true,
     timer:4000});

    setTimeout(()=>{window.location.reload();},18000);
}
   }
 



  //modal for pop up bootstrap//
  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    
    if(mode==='findLoc'){
      button.setAttribute('data-target','#locationForm');
    }
   
    container?.appendChild(button);
    button.click();
  }
  public onOpenModalEdit(eventToShow:Event, mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='moreInfo'){
      this.chosenEvent=eventToShow;
      button.setAttribute('data-target','#moreInfo');
    }

    container?.appendChild(button);
    button.click();
  }
}



