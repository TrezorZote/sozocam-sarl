

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
   
    private example:Transaction[]=[new Transaction(1,55,"Afro nation 2023","Aug 12, 2023",0,true),new Transaction(2,100,"Afroland Festival 2023","Aug 13, 2023",0,true)];
   
    private currentUser: Person = new Person(1,145897684563,"Christa Ronaldo","Portugal Lisboa street 7","temliz@mail.com","temliz",70000,this.example,this.isLoggedIn());

    public events: Event[] = [ new Event(12,692923746,"Joeboy Concert","Joeboy, the rising star of Afropop, is known for his catchy hits like Baby and Sip (Alcohol). With his smooth vocals and infectious melodies, Joeboy’s performances are a must-see, bringing youthful energy and fresh vibes to the stage. Don’t miss the chance to experience his music live!","London O2 arena",12345,[40,50,70],"Dec 12, 2024",'https://shorturl.at/kfMci'),
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


    public filterArray:Event[]=[];
    private persons:Person[]=[this.currentUser];
    public basket:Basket[]=[];
    private count :number=2;
    public clickedEvent : any;

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
           sessionStorage.setItem('loggedin', 'true');//set loggedin to true when the user sign up
           const newUser:Person=new Person(this.count,contact,name,address,email,password,50000,[],this.isLoggedIn());
           this.count++;
           this.currentUser=newUser;
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

getValues(location:any,datestart:any,dateend:any):void{

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
  var newTransaction:Transaction= new Transaction(1,this.sumArrayForEach(basketItem.prices),basketItem.event.eventCategory+' '+basketItem.event.eventLocation,this.currentDate(),0,true)
  this.currentUser.transactions.push(newTransaction);
  this.currentUser.transactions.reverse();
  this.basket=[];
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
