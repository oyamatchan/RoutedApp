import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

constructor(private studentData:SharedService) { }
studentCollection:Array<object>;
Number:number;
Firstname:string;
Lastname:string;
Program:string;
Year:number;
  ngOnInit() {
    this.studentCollection=this.studentData.getStudents();
  }

}
