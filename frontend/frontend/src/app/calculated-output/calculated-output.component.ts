import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service'


@Component({
  selector: 'app-calculated-output',
  templateUrl: './calculated-output.component.html',
  styleUrls: ['./calculated-output.component.css']
})
export class CalculatedOutputComponent implements OnInit {

  public calculatedData$?: Observable<{}>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.calculatedData$ = this.dataService.getCalculateCost();
  }

}
