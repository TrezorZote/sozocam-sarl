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

   eventsArray: Event[] = [ new Event(12,692923746,"Joeboy Concert","Joeboy, the rising star of Afropop, is known for his catchy hits like Baby and Sip (Alcohol). With his smooth vocals and infectious melodies, Joeboy’s performances are a must-see, bringing youthful energy and fresh vibes to the stage. Don’t miss the chance to experience his music live!","London O2 arena",12345,[40,50,70],"Dec 12, 2024",'https://shorturl.at/kfMci'),
    new Event(1,681435264," Burna Boy Concert","Burna Boy, the Grammy-winning Nigerian superstar, is a global sensation known for his infectious blend of Afrobeat, reggae, dancehall, and hip-hop. With hits like ye On the Low, and Last Last, he has captivated audiences worldwide with his powerful lyrics, dynamic stage presence, and unique sound. Burna Boy’s concerts are an electrifying experience, filled with high-energy performances, vibrant visuals, and a connection to his African roots. Don't miss the chance to see him live and feel the energy of one of the most influential artists of our time!"," Cologne lanxess arena ",12345,[60,80,100],"Oct 22, 2024",'https://shorturl.at/03lOg'),
    new Event(2,676453624,"Gonzo vibes"," Party Get ready to groove all night at the hottest club party in town! Join us for an unforgettable evening of Afrobeats, where the rhythms are infectious, the vibes are electric, and the dance floor is on fire. Don’t miss out on the ultimate Afro-fusion experience—grab your friends and let’s turn up the heat!","Stuttgart str 30",12345,[10,20,30],"Aug 30, 2024",'https://shorturl.at/IlBab'),
    new Event(3,692923746,"Afro cloud"," Party with sound Afrobeats Amapiano Dancehall party","Bochum Bahnhof str 52",12345,[10,20,40],"Sep 25, 2024",'https://shorturl.at/D4gPg'),
    new Event(4,672204043,"Prime events"," Party Get ready to turn up at our Hip-Hop Heat party! Immerse yourself in a night of blazing beats, smooth flows, and epic vibes. With the best in Hip-Hop blasting all night, this is your chance to dance, chill, and vibe with the hottest tracks. Bring your energy and let’s make it a night to remember!","Essen borbeck str 14",12345,[10,20,40],"Nov 1, 2024",'https://shorturl.at/SpYn1'),
    new Event(5,622765893,"Bumaye","Party Get ready to light up the dance floor at our Afrobeats party! Immerse yourself in the best Afro-fusion sounds, where the beats are nonstop, the energy is high, and the vibe is unbeatable. Bring your crew and let’s dance the night away to the hottest Afrobeats tracks!","Hamburg Bahnhof Str 18",12345,[15,20,50],"Oct 10, 2024",'https://shorturl.at/J7frj'),
    new Event(6,622765893,"Rema Concert","Rema is in Germany come vibe with the afrobeat prince","koln Bahnhof Str 18",12345,[60,70,100],"Aug 27, 2024",'https://shorturl.at/7pre4'),
    new Event(7,622765893,"Muy Calliente","Party Dive into the rhythm of our Latin Sounds party! Experience an electrifying night filled with sizzling Latin beats, passionate dance moves, and an unforgettable atmosphere. Join us for a vibrant celebration where the music heats up and the dance floor comes alive. Let's fiesta all night long!","koln Bahnhof Str 18",12345,[10,20,30],"Aug 24, 2024",'https://shorturl.at/vR6jc'),
    new Event(8,622765893,"Bundesligaspiel ticket","Dortmund gegen Bayern der Klassiker","Bayern Bahnhof Str 18",12345,[60,100,300],"Oct 5, 2024",'https://shorturl.at/E94kl'),
    new Event(9,622765893,"Chris Brown Concert","Chris Brown, the multi-talented global superstar, is known for his electrifying performances, chart-topping hits, and incredible dance moves. With iconic tracks like Run It!, Loyal, and No Guidance, Chris Brown's concerts are an explosive mix of energy, music, and entertainment. Don’t miss the chance to see him live for an unforgettable experience! ","Frankfurt Str 18",12345,[60,70,100],"Dec 23, 2024",'https://shorturl.at/yuN5w'),
    new Event(10,692923746,"Latino Gang","party with sounds Latin Reggae Bachata Afrobeats Amapiano Dancehall ","Bochum nrw alle 52",12345,[15,25,50],"Dec 31, 2024",'https://shorturl.at/07z86'),
    new Event(11,692923746,"Afro nation","best of african artists perform live in portugal Burna boy Rema Davido and more","Portugal porto beach",12345,[150,200,300],"Jun 28-29, 2024",'https://shorturl.at/tJQev'),
    new Event(13,692923746,"Omah lay Concert","Omah Lay, the Nigerian Afro-fusion sensation, is making waves with hits like Bad Influence and Godly. Known for his soulful voice and captivating rhythms, Omah Lay delivers unforgettable performances that resonate with fans worldwide. Catch him live for an evening of pure musical magic!","London O2 arena ",12345,[50,60,90],"Aug 23, 2024",'https://shorturl.at/diFU1')];

   concert:Event[]= this.eventsArray.filter(e => e.eventCategory.indexOf('Concert') != -1).reverse();
   parties:Event[]= this.eventsArray.filter(e => e.eventDescription.indexOf('Party') != -1);
   filterarray:Event[]=[];
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
    this.filterarray=result;
    if(result.length===0|| !key){
      this.filterarray=[];
    }
    
  }

  datepicker(pick:string){
    const picker =document.getElementById(pick) as HTMLInputElement;
    picker.showPicker();
  }

  public getCurrent():string{
    let date:Date=new Date();
    var string:string= date.getFullYear()+'-'+date.getDay()+'-'+date.getUTCDate();
    return string;
  }

  select(eventToAdd:Event,vip:any,access:any,normal:any):void{
    if(vip!=0||access!=0||normal!=0){
    var prices:number[]=[normal * eventToAdd.prices[0],access* eventToAdd.prices[1],vip* eventToAdd.prices[2]];
    if(this.authService.addToCart(eventToAdd,prices)){
      const dismiss= document.getElementById('out');
      dismiss?.click();
      Swal.fire({
        icon: 'success',
        title: 'added to basket',
        text: 'event visible in your basket',
        timer: 3000,
      showConfirmButton: false,
      width: '400px', // Adjust width as needed
      heightAuto:true
      });
    }
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'no ticket selected',
      text: 'select atleast one ticket',
      timer: 3000,
    showConfirmButton: false,
    width: '400px', // Adjust width as needed
    heightAuto:true
    }); 
  }
  }

  //search events by city and date//
  public filterEvents(location:any,datestart:any,dateend:any):void{
    this.eventsArray.forEach(element => {
      if((element.eventLocation.toLowerCase().indexOf(location.toLowerCase())!=-1) && (this.isBetweenDate(datestart,dateend,element.date)) ){
       this.filterarray.push(element);
      }
    });
if(this.filterarray.length>=1){
  const dismiss= document.getElementById('outer');
  dismiss?.click();
  Swal.fire({
    icon: 'success',
    title: 'filtered',
    text: 'view filter result under search',
    timer: 3000,
  showConfirmButton: false,
  width: '400px', // Adjust width as needed
  heightAuto:true
  }); 
}
else{
  Swal.fire({
    icon: 'error',
    title: 'no event found',
    text: 'the filter found no match',
    timer: 3000,
  showConfirmButton: false,
  width: '400px', // Adjust width as needed
  heightAuto:true
  }); 
}
   }
 
isBetweenDate(dateone:string,datetwo:string,date:string):boolean{
  let d1 = new Date(dateone);
  let d2 = new Date(datetwo);
  let d3 = new Date(date);
  if(d3>=d1 && d3<=d2){ 
    return true;
  }else{
    return false;
  }
}


  //modal for pop up bootstrap//
  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    
    if(mode==='filter'){
      button.setAttribute('data-target','#filter');
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



