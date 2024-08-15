export class Event{
    constructor(id:number,contact:number,eventCategory:string,
        eventDescription: string,eventLocation:string,password:number,prices:number[]){
        this.id=id;
        this.contact=contact;
        this.eventCategory=eventCategory;
        this.eventDescription=eventDescription;
        this.password=password;
        this.eventLocation=eventLocation;
        this.prices=prices
    }
    id:number;
    contact:number;
    eventCategory:string;
    eventDescription:string;
    eventLocation:string;
    password:number;
    prices:number[]=[];
}