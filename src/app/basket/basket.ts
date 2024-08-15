import { Event } from "../event/Event";


export class Basket{
    constructor(id:number,event:Event,prices:number[]){
        this.id=id;
         this.event=event;
        this.prices=prices;
    }
    id:number;
    event:Event;
    prices:number[]=[];
}