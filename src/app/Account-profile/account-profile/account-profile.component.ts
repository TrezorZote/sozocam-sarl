import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/Animations';
import { Person } from 'src/app/person';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Transaction } from 'src/app/transactions';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css'],
  animations:[fadeAnimation]
})
export class AccountProfileComponent implements OnInit {
  email: string = '';
  name: string = '';

  constructor(public authService: AuthentificationService) {}

  
  ngOnInit() {
    this.authService.getCurrentUser();
  }


  /*public example:Transaction[]=[new Transaction(1,10000,"payment for online","12-08-2023",0,true),new Transaction(2,10000,"payment for food online","13-08-2023",0,true)];
  public currentUser:Person=new Person(1,303030,"Christa Roonaldo0","Portugal Lisboa","temliz",12345,70000,this.example,false);

  getCurrentUser():void{
    if(this.authService.getCurrentUser()){
     this.currentUser = this.authService.getCurrentUser();
  }
}*/
}
