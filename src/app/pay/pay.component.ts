import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
 constructor(public authServ:AuthentificationService){
 }

 getSum():number{
  var count=0
this.authServ.basket.forEach(element => {
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
if(this.authServ.basket[0]!=null){
this.authServ.addOrder(this.authServ.basket[0]);
}else{
  Swal.fire({
    icon: 'error',
    title: 'Basket empty',
    text: 'add events to your basket',
    timer: 3000,
  showConfirmButton: false,
  width: '400px', // Adjust width as needed
  heightAuto:true
  });
}
}
}