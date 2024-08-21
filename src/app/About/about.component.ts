import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-pay',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
