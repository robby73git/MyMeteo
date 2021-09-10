import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  // @Output() addLocationEvent = new EventEmitter<string>();

  public itemLocation: Location;
  zipCode:string;
  zipCodeToDelete:string;
  errorMessage:string = null;
  public allLocation: Array<Location> = new Array<Location>();
  public addedLocation: Array<Location> = new Array<Location>();

  constructor() {
    this.allLocation = new Array<Location>(
    new Location('00100', 'Roma', 'Soleggiato', 30, 35, 20),
    new Location('00200', 'Milano', 'Nebbioso', 25, 30, 14),
    new Location('00300', 'Torino', 'Nuvoloso', 24, 28, 12),
    new Location('00400', 'Napoli', 'Parzialmente nuvoloso', 32, 35, 21)

  );
   }

  ngOnInit(): void {
  }

  addLocation(){

    const regExp = new RegExp('^[0-9]{5}$');
    this.errorMessage = null;
    
    if(regExp.test(this.zipCode)){
      const location = this.allLocation.find(location => location.zipCode == this.zipCode);
      const exist = this.addedLocation.findIndex(location => location.zipCode == this.zipCode);

      if (location == null) {
        // this.addedLocation.push(location);
        this.errorMessage = "ZipCode non presente";
        console.log('ZipCode non presente');

     } else {
        if (location && exist == -1) {
        this.addedLocation.push(location);
          console.log('ZipCode inviato');

        } else {
          this.errorMessage = "Lo zipCode è già presente nella lista";
          console.log('Lo zipCode è già presente nella lista')  ;   
        }
      }

    } else {
        this.errorMessage = "Formato zipCode non valido";
        console.log('Formato zipCode non valido');
    } 

    this.allLocation.forEach((loc: Location) => {
      console.log(loc.name);

    });
    this.addedLocation.forEach((loc: Location) => {
      console.log(loc.name);

    });
  }

  onDeleteEvent(zipCodeToDelete:string){
    this.zipCodeToDelete = zipCodeToDelete;
    this.addedLocation = this.addedLocation.filter(location => location.zipCode != zipCodeToDelete);
  }

}
