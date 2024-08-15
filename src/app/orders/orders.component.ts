import { Component } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(public authService: AuthentificationService) {}

  
  ngOnInit() {
    this.authService.getCurrentUser();
  }

  

}
