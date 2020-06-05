import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  convertText: string = "I Am Being Managed By Pipes in angular";

  itemPrice: number = 5.50;

  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';

  customers = [
    { id: 1, firstName: 'Elite', lastName: 'Corner', email: 'a@a.com' },
    { id: 2, firstName: 'Json', lastName: 'Pipe', email: 'a@a.com' },
    { id: 3, firstName: 'Angular', lastName: 'Material', email: 'a@a.com' }];

}
