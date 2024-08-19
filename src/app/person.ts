import { Transaction } from "./transactions";

export class Person{
    constructor(id:number,contact:number,name:string,
        adress: string,email:string,password:string,balance:number, transactions:Transaction[],loggedIn:boolean){
        this.id=id;
        this.contact=contact;
        this.name=name;
        this.adress=adress;
        this.password=password;
        this.balance=balance;
        this.email=email;
        this.transactions=transactions;
       this.loggedIn=loggedIn
    }
    id:number
    contact:number;
    name:string;
    adress:string;
    email:string;
    password:string;
    balance:number;
    loggedIn:boolean;
    transactions:Transaction[];
 }