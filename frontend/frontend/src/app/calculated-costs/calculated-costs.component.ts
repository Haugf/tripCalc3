import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-calculated-costs',
  templateUrl: './calculated-costs.component.html',
  styleUrls: ['./calculated-costs.component.css']
})
export class CalculatedCostsComponent implements OnInit {

  public calculatedCosts$?: Observable<{}>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.calculatedCosts$ = this.dataService.getCalculatedCost();
  }
  getAll(): void {
    console.log(this.dataService.getCalculatedCost())
    this.calculatedCosts$ = this.dataService.getCalculatedCost(); 
  }

}
