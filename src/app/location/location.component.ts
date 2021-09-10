import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from './location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() itemLocation: Location;
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  public allLocation: Array<Location> = new Array<Location>();
  public addedLocation: Array<Location> = new Array<Location>();

  constructor() {
   }

  ngOnInit(): void {

    console.log(this.itemLocation.zipCode);
  }
  onClick(){
    this.deleteEvent.emit(this.itemLocation.zipCode);
  }
}
