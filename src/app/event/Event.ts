export class Event{
    constructor(id:number,contact:number,eventCategory:string,
        eventDescription: string,eventLocation:string,password:number,prices:number[],date:string,imagesrc:string){
        this.id=id;
        this.contact=contact;
        this.eventCategory=eventCategory;
        this.eventDescription=eventDescription;
        this.password=password;
        this.eventLocation=eventLocation;
        this.prices=prices;
        this.date=date;
        this.imagesrc=imagesrc;
    }
    id:number;
    contact:number;
    eventCategory:string;
    eventDescription:string;
    eventLocation:string;
    password:number;
    prices:number[]=[];
    date:string;
    imagesrc:string;
}