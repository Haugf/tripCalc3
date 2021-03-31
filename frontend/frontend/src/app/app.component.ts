import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   console.log("okay");
  //  this.getAllPeople();
  // }

  //   // Add one person to the API
  //   addPerson(name, age) {
  //     this.http.post(`${this.API}/users`, {name, age})
  //       .subscribe(() => {
  //         this.getAllPeople();
  //       })
  //   }

  //     // Get all users from the API
  // getAllPeople() {
  //   this.http.get(`${this.API}/users`)
  //     .subscribe((people: any) => {
  //       console.log(people)
  //       this.people = people
  //     })
  // }

}
