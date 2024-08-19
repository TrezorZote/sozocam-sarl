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

   eventsArray: Event[] = [ new Event(12,692923746,"Joeboy Concert","Joeboy 2k24 europe tour must be there","London O2 arena",12345,[10,20,30],"Dec 12, 2024"),
    new Event(1,681435264," Burna Boy Concert","Burna Boy europe tour"," Cologne lanxess arena ",12345,[10,20,30],"Oct 22, 2024"),
    new Event(2,676453624,"Gonzo vibes","Afrobeats Amapiano Dancehall party","Stuttgart str 30",12345,[10,20,30],"Aug 30, 2024"),
    new Event(3,692923746,"Afro cloud","Afrobeats Amapiano Dancehall party","Bochum Bahnhof str 52",12345,[10,20,30],"Sep 25, 2024"),
    new Event(4,672204043,"Prime events","Hip Hop Trap Afrobeats Amapiano Dancehall party","Essen borbeck str 14",12345,[10,20,30],"Nov 1, 2024"),
    new Event(5,622765893,"Bumaye","Afrobeats Amapiano Dancehall party","Hamburg Bahnhof Str 18",12345,[10,20,30],"Oct 10, 2024"),
    new Event(6,622765893,"Rema Concert","Rema is in Germany come vibe with the afrobeat prince","koln Bahnhof Str 18",12345,[10,20,30],"Aug 27, 2024"),
    new Event(7,622765893,"Muy Calliente","Afrobeats Latin Reggae Dancehall party","koln Bahnhof Str 18",12345,[10,20,30],"Aug 24, 2024"),
    new Event(8,622765893,"Bundesligaspiel ticket","Dortmund gegen Bayern der Klassiker","Bayern Bahnhof Str 18",12345,[10,20,30],"Oct 5, 2024"),
    new Event(9,622765893,"Chris Brown Concert","Chris Breezy under the influence tour vibe with the RnB legend ","Frankfurt Str 18",12345,[10,20,30],"Dec 23, 2024"),
    new Event(10,692923746,"Gonzo vibes","Afrobeats Amapiano Dancehall party","Bochum nrw alle 52",12345,[10,20,30],"Dec 31, 2024"),
    new Event(11,692923746,"Afro nation","best of african artists perform live in portugal Burna boy Rema Davido and more","Portugal porto beach",12345,[10,20,30],"Jun 28-29, 2024"),
    new Event(13,692923746,"Omah lay Concert","Omah lay afrobeat singer performing live","London O2 arena ",12345,[10,20,30],"Aug 23, 2024")];

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



