export class Location{
    zipCode: string;
    name: string;
    currentCondition: string;
    temperature :number;
    maxToday : number;
    minToday : number;
    constructor (zipCode:string, name:string, currentCondition:string, temperature:number, maxToday:number, minToday:number){
        this.zipCode = zipCode;
        this.name = name;
        this.currentCondition = currentCondition;
        this.temperature = temperature;
        this.maxToday = maxToday;
        this.minToday = minToday;

    }
}