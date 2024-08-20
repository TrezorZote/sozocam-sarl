import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(public authService: AuthentificationService) {}
  
  ngOnInit() {
    this.authService.getCurrentUser();
  }
  getSum():number{
    var count=0
  this.authService.basket.forEach(element => {
    count = this.sumArrayForEach(element.prices) + count;
  });
  return count;
}
 sumArrayForEach(numbers: number[]):number{
  var sum = 0;
  numbers.forEach(num => {
      sum += num;
  });
  return sum;
};

addOrder():void{
  const dismiss= document.getElementById('out');
  dismiss?.click();
  this.authService.addOrder(this.authService.basket[0]);
}

public onOpenModal( mode:string):void{
  const container= document.getElementById('main-container');
  const button =document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  
  if(mode==='payment'){
    button.setAttribute('data-target','#payment');
  }
 
  container?.appendChild(button);
  button.click();
}

}
