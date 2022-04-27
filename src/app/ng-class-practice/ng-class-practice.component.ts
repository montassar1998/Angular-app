import { Component, OnInit } from '@angular/core';
import { server } from './server';
@Component({
  selector: 'app-ng-class-practice',
  templateUrl: './ng-class-practice.component.html',
  styleUrls: ['./ng-class-practice.component.css']
})
export class NgClassPracticeComponent implements OnInit {
  s: server[] = [
    new server("production server", "small", new Date(), "Success"),
    new server("Deployment server ", "medium", new Date(), "Warning"),
    new server("Testing server", "large", new Date(), "Danger"),
    new server("Development server", "Medium", new Date(), "Success"),
    new server("HTTP Serv", "small", new Date(), "Warning"),


  ];
  stringToSearch: string = "";
  constructor() { }

  ngOnInit(): void {
    // alert(this.s)
  }
  //pipes to formmat input 

}
