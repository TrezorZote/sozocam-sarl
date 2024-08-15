import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor(public authService:AuthentificationService){}

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

}
