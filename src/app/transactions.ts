export class Transaction{
    constructor(id:number,sent:number,
        description: string,date:string,received:number,sending:boolean,){
        this.id=id;
        this.sent=sent;
        this.description=description;
        this.received=received;
        this.sending=sending;
        this.date=date;
    }

    id:number
    sent:number;
    description:string;
    date:string;
    received:number;
    sending:Boolean;
   
 }