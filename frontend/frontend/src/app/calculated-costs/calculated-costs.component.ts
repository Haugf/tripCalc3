import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service';
import { Trip } from '../trip';
import { Calculated } from '../calculated'

@Component({
  selector: 'app-calculated-costs',
  templateUrl: './calculated-costs.component.html',
  styleUrls: ['./calculated-costs.component.css']
})
export class CalculatedCostsComponent implements OnInit {

  public calculatedCosts$?: Observable<{}>;
  

  model = new Trip(18, 
    'Alice', 23.78,
    'Robert', 54.78,
    'Shan', 233.78,
    );

  submitted = false;

  public pleaseWork: any;
  public submitMessage: any;
  
  public calculatedResponse = new Calculated(0, '', 0, '', 0, '', 0);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dataService.getCalculatedCost().subscribe(
      data => {},
      err => {console.error(err)},
      () => console.log("done calling API")
    );
  }
  
  onSubmit(data: any) {
    console.log(data.camperThree_name);

    this.submitted = true;
    this.dataService.getCalculatedCost2(data).subscribe(
      res => {
        // console.log(res);
        
        this.calculatedResponse = res as Calculated
          // this.grandTotal = data.grandTotal
          console.log(this.calculatedResponse);
          
      },
      err => {console.error(err)},
      () => console.log("done calling submit API")
    );
    
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
