import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
 constructor(public authServ:AuthentificationService,public router:Router){}

  //search events by city and date//
 //search events by city and date//
 public filterEvents(location:any,datestart:any,dateend:any):void{
  this.authServ.events.forEach(element => {
    if((element.eventLocation.toLowerCase().indexOf(location.toLowerCase())!=-1) && (this.isBetweenDate(datestart,dateend,element.date)) ){
     this.authServ.filterArray.push(element);
    }
  });
if(this.authServ.filterArray.length>=1){
Swal.fire({
  title: 'found events with given filter go to view events ',
  position:'bottom',
  timer: 4000,
showConfirmButton: false,
width: '310px', // Adjust width as needed
heightAuto:true,
toast:true,
padding:'1px',
}); 
}
else{
Swal.fire({
  title: 'sorry no event found ',
  position:'bottom',
  timer: 3000,
showConfirmButton: false,
width: '210px', // Adjust width as needed
heightAuto:true,
toast:true,
padding:'1px'
}); 
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

}
