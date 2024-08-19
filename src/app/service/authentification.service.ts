

/* ng generate service authentification*/
import { Injectable } from '@angular/core';
import { Person } from '../person';
import { Transaction } from '../transactions';
import { Event } from '../event/Event';
import Swal from 'sweetalert2';
import { Basket } from '../basket/basket';


interface User {
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  

    private users: User[] = [{'email':'temliz','password':'12345','name':'ulrich Tresor'}];
   
    private example:Transaction[]=[new Transaction(1,10000,"Afro nation 2023","Aug 12, 2023",0,true),new Transaction(2,10000,"Afroland Festival 2023","Aug 13, 2023",0,true)];
   
    private currentUser: Person = new Person(1,100000,"Christa Ronaldo","Portugal Lisboa street 7","temliz@mail.com","temliz",70000,this.example,false);

    private persons:Person[]=[this.currentUser];
    public basket:Basket[]=[];
    private count :number=2;

    signIn(email: string, password: string):boolean {
     // const him = this.users.find(u => u.email === email && u.password === password);
      const user= this.persons.find(p => p.email === email && p.password === password);
      if (user) {
        this.currentUser = user;
        this.currentUser.loggedIn = true;
        sessionStorage.setItem('loggedin', 'true'); //set the logged in session item to true when the user logs in
        Swal.fire({
          icon: 'success',
          title: 'Logged in',
          text: 'You have been logged in successfully',
          timer: 3000,
        showConfirmButton: false,
        width: '400px', // Adjust width as needed
        heightAuto:true
        });
        return true;
      }
      return false;
    }
  
    signUp(email: string,name: string, password: any,address:string,contact:any): boolean {
      const userExists = this.persons.some(u => u.email === email);
      if (!userExists && email != null && name !=null ) {
           const newUser:Person=new Person(this.count,contact,name,address,email,password,50000,[],true);
           this.count++;
           this.currentUser=newUser;
           sessionStorage.setItem('loggedin', 'true');//set loggedin to true when the user sign up
           Swal.fire({
            icon: 'success',
            title: 'signed up',
            text: 'welcome to Temliz',
            timer: 3000,
          showConfirmButton: false,
          width: '400px', // Adjust width as needed
          heightAuto:true
         }); 
        this.persons.push(newUser);
        return true;
      }
      return false;
    }
  
    getCurrentUser(): Person {
      return this.currentUser;
    }
    getCurrentUserCorb(): Basket[] {
      return this.basket;
    }

    deleteAccount():boolean{
      let index = 0;
     var  removed :Person[]=[];
      this.persons.forEach(element => {
        if(element.email==this.currentUser.email){
          removed = this.persons.splice(index,1);
        }
        index++;
      });
      if(removed[0] != null){
       return true;
      }
      else{
         return false;
        }
    }

      signOut():void{
      if(this.currentUser){
      this.currentUser.loggedIn=false;
       sessionStorage.removeItem('loggedin');
       // when i log out i remove the loggedin session item this means if someone tries
       //to access a profile via the url it will redirect to sign in component
  }
}

addToCart(eventToAdd:Event,prices:number[]):boolean{
  var newItem : Basket= new Basket(1,eventToAdd,prices);
  this.basket.push(newItem);
  return true;
}

sumArrayForEach(numbers: number[]):number{
  var sum = 0;
  numbers.forEach(num => {
      sum += num;
  });
  return sum;
};

currentDate():string{
  const now: Date = new Date();
  const dateString: string = now.toLocaleDateString('en-US', {
    day: 'numeric', // Numeric day (e.g., "8")
    month: 'short', // Short month name (e.g., "Aug")
    year: 'numeric' // Numeric year (e.g., "2024")
});
return dateString;
}


addOrder(basketItem:Basket):boolean{
  var newTransaction:Transaction= new Transaction(1,this.sumArrayForEach(basketItem.prices),basketItem.event.eventDescription,this.currentDate(),0,true)
  this.currentUser.transactions.push(newTransaction);
  Swal.fire({
    icon: 'success',
    title: 'Payment successful',
    text: 'thank you for trusting temliz',
    timer: 3000,
  showConfirmButton: false,
  width: '400px', // Adjust width as needed
  heightAuto:true
  });
  return true;
}

  // this method is the key for the auth guard it checks if the sessionstorage item value is set 
  isLoggedIn(): boolean {
    // Check if the user is logged in
    return !!sessionStorage.getItem('loggedin');
  }

  }
