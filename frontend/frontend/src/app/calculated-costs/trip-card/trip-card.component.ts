import { Component, Input, OnInit } from '@angular/core';
import { Trip, Trip2 } from '../../trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input() name! :string
  @Input() cost! :number


  
  public model = {"camperOne_name": this.name, "camperOne_total": this.cost}
  constructor() { }

  ngOnInit(): void {
  }

}
